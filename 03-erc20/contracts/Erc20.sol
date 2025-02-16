// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Cat is ERC20 {
    constructor(uint256 initialSupply) ERC20("Farm", "APAT") {
        _mint(msg.sender, initialSupply);
    }

    function generateTokens(address destination, uint256 amount) public {
        _mint(destination, amount);
    }
}