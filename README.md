# @\_mon/contracts-helper

Fetches allowances, balances, funded status for multiple accounts in a single contract call.
Currently supports only Kovan network

## Install

```
$ npm install @_mon/contracts-helper
```

## Usage

```js
const { getAllowancesAndBalancesResult } = require('@_mon/contracts-helper');

// getAllowancesAndBalancesResult(networkId, addresses[], tokenAddresses[], spenderAddress, amounts[])
const result = await getAllowancesAndBalancesResult(
  42,
  ['0x0000000000000000000000000000000000000000'],
  ['0x0000000000000000000000000000000000000000'],
  '0x0000000000000000000000000000000000000000',
  ['0']
);
//=> ['0']
'0' - Both Allowanance and Balance not available
'1' - Allowance not available, Balance available
'2' - Allowance available, Balance not available
'3' - Allowance and Balance both available

```
