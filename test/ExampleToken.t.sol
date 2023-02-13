// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/ExampleToken.sol";

contract ExampleTokenTest is Test {
    ExampleToken public token;

    function setUp() public {
        token = new ExampleToken();
    }

    function testName() public {
        assertEq(token.name(), "Example Token");
    }
}
