const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "<hidden>";
const mnemonic = "<hidden>";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      websockets: true
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`, 1),
      network_id: 4,       // rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000
    },
  },
  compilers: {
    solc: {
      version: "^0.8.10"
    }
  }
};