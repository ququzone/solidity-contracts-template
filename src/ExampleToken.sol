// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC20} from "solmate/src/tokens/ERC20.sol";

contract ExampleToken is ERC20 {
    constructor() ERC20("Example Token", "EXM", 18) {
        _mint(msg.sender, 10000 * 10**18);
    }
}
