# ens-namehash
Solidity Implementation of the ENS namehash algorithm.

## Install

```
npm install JonahGroendal/ens-namehash
```
## Usage

```solidity
pragma solidity ^0.5.1;

import 'ens-namehash/contracts/ENSNamehash.sol';

contract A {
  using ENSNamehash for bytes;
  
  function getNamehash(bytes memory name) public pure returns (bytes32) {
    return name.namehash(0);
  }
}
```
