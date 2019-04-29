# @\_mon/contracts-helper

Fetches allowances, balances, funded status for multiple accounts in a single contract call.

## Install

```
$ npm install @_mon/contracts-helper
```

## Usage

```js
const { getAllowancesAndBalancesResult } = require('@_mon/contracts-helper');

const result = await getAllowancesAndBalancesResult(
  42,
  ['0x0000000000000000000000000000000000000000'],
  ['0x0000000000000000000000000000000000000000'],
  '0x0000000000000000000000000000000000000000',
  ['0']
);
//=> [0]
```
