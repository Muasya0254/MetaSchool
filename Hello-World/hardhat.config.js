require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const {PRIVATE_KEY} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "sepolia",
  networks:{
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/WzBTYwDiwd7gpCYZgDB8q4S9zoTTFjqi",
      accounts: [`0x${PRIVATE_KEY}`],
    }
  }
};
