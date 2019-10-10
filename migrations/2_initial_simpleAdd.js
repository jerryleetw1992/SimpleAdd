const SimpleAdd = artifacts.require("SimpleAdd");

module.exports = function(deployer) {
  deployer.deploy(SimpleAdd);
};
