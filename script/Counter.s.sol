// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "forge-std/Script.sol";

contract ExampleScript is Script {
    function setUp() public {}

    function run() public {
        vm.broadcast();
    }
}
