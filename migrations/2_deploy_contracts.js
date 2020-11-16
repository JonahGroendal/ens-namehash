var NamehashTest = artifacts.require("NamehashTest");

module.exports = function(deployer, network) {
  // Deploying for testing purposes only. The actual library doesn't get deployed,
  // it gets compiled directly into the contract that uses it.
  deployer.deploy(NamehashTest);
};
