const Web3 = require('web3');

const {
  KOVAN_RPC_URL,
  MAINNET_RPC_URL,
  KOVAN_ALLOWANCES_AND_BALANCES_CHECKER_CONTRACT_ADDRESS,
  MAINNET_ALLOWANCES_AND_BALANCES_CHECKER_CONTRACT_ADDRESS
} = require('./config');
const AllowancesAndBalancesCheckerABI = require('./src/contracts/AllowancesAndBalancesChecker.json')
  .abi;

const getAllowancesAndBalancesResult = async (
  networkId,
  addresses,
  assetAddresses,
  spenderAddress,
  amounts
) => {
  try {
    let web3;
    if (networkId === 42) {
      web3 = new Web3(new Web3.providers.HttpProvider(KOVAN_RPC_URL));
      const AllowancesAndBalancesChecker = new web3.eth.Contract(
        AllowancesAndBalancesCheckerABI,
        KOVAN_ALLOWANCES_AND_BALANCES_CHECKER_CONTRACT_ADDRESS
      );
      const result = await AllowancesAndBalancesChecker.methods
        .allowancesAndBalancesResult(
          addresses,
          assetAddresses,
          spenderAddress,
          amounts
        )
        .call();
      return result;
    }
    // else if (networkId === 1) {
    //   web3 = new Web3(new Web3.providers.HttpProvider(MAINNET_RPC_URL));
    // }
    else {
      // return saying networkId can be 1 or 42
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllowancesAndBalancesResult
};
