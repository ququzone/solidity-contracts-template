// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract ExampleToken is ERC20Upgradeable {

    function initialize() initializer public {
        __ERC20_init("Example Token", "EXM");
        _mint(msg.sender, 10000 * 10**18);
    }
}
