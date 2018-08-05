var Migrations = artifacts.require("./Scm.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
