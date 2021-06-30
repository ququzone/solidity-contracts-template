// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ExampleToken is ERC20 {
    constructor() public ERC20("Example Token", "EXM") {
        _mint(msg.sender, 10000 * 10**18);
    }
}
