const HDWalletProvider = require('truffle-hdwallet-provider')
const fs = require('fs')
var mnemonic = "office body okay dignity crack mention chat must foil upgrade knife among";


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" , // Match any network id
      gas: 4600000
    },
  rinkeby: {
    provider: new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/01430c533dcd4c42bd9cc98cff3eb0a4'),
    network_id: '*',
    gas: 4500000,
    gasPrice: 25000000000
  }
},
};