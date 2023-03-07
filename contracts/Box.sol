// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable {

   constructor(
    string memory name,
    string memory parent,
    address[] memory members
  ){}

  uint256 private value;
  mapping(string => uint256) public budget;

  // Emitted when the stored value changes
  event ValueChanged(uint256 newValue);

  // Stores a new value in the contract
  function store(uint256 newValue) public onlyOwner {
    value = newValue;
    emit ValueChanged(newValue);
  }

  function adjustBudget(string memory purpose, uint256 newValue) public onlyOwner {
    budget[purpose] = newValue;
  }

  function createChildDao(string memory name, string memory parent, address[] memory members) private onlyOwner {

  }

  // Reads the last stored value
  function retrieve() public view returns (uint256) {
    return value;
  }
}
