var ENSNamehash = artifacts.require("ENSNamehash");

module.exports = function(deployer, network) {
  deployer.deploy(ENSNamehash);
};
