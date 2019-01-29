const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');

// delete 'build' folder
fs.removeSync(buildPath);

// walk through 'contracts' folder
const contractPath = path.resolve(__dirname, 'contracts');
fs.readdirSync(contractPath).forEach(file => {
   if (file.endsWith('.sol')) {
      // read each contract source
      const sourcePath = path.resolve(contractPath, file);
      const source = fs.readFileSync(sourcePath, 'utf8');

      // compile contract with solidity compiler
      const output = solc.compile(source, 1).contracts;
      fs.ensureDirSync(buildPath);

      // write output to 'build' folder
      for (let contract in output) {
         fs.outputJsonSync(
            path.resolve(buildPath, contract.split(':')[1] + '.json'),
            output[contract]
         );
      }
   }
});
