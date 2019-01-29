pragma solidity ^0.4.17;

contract CampaignFactory {

    address[] public campaigns;
    
    function createCampaign(uint minimalContribution) public {

        address campaign = new Campaign(minimalContribution, msg.sender);
        campaigns.push(campaign);        
    }
    
    function getDeployedCampaigns() public view returns (address[]) {
        return campaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        mapping(address => bool) approvals;
        uint approvalCount;
    }

    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    Request[] public requests;

    modifier onlyManager{
        require(msg.sender == manager);
        _;
    }

    // constructor
    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value >= minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string description, uint value, address recipient)
        public onlyManager
    {
        Request memory r = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        
        requests.push(r);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]); // é um aprovador registrado
        require(!request.approvals[msg.sender]);// não votou antes

        request.approvalCount++;
        request.approvals[msg.sender] = true;
    }
    
    function finalizeRequest(uint index) public onlyManager {
        Request storage request = requests[index];
        
        require(!request.complete); //já foi encerrada antes
        require(request.approvalCount > (approversCount / 2)); // aomenos 50% dos aprovadores
        
        request.recipient.transfer(request.value);  // transfere para a conta do fornecedor

        request.complete = true;
    }

    function getSummary() public view returns (
        uint, uint, uint, uint, address
        ) {
        return (
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}