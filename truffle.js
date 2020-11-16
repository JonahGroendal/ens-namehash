const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');

const infuraKey = "48899b10645a48e189e345be4be19ece";

let privateKeys;
try {
 privateKeys = JSON.parse(fs.readFileSync("keys.json").toString().trim()).private;
} catch {}

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  compilers: {
    solc: {
      version: "0.5.2",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
