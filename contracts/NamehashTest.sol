pragma solidity ^0.5.2;

import './ENSNamehash.sol';

contract NamehashTest {
  using ENSNamehash for bytes;

  function namehash(bytes calldata domain) external pure returns (bytes32) {
    return domain.namehash();
  }
}
