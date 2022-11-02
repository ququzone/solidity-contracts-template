import { ethers } from "hardhat"
import { expect } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

import { ExampleToken } from "../typechain/contracts/ExampleToken"

describe("ExampleToken", function () {
    let token: ExampleToken
    let owner: SignerWithAddress

    before(async function () {
        ;[owner] = await ethers.getSigners()

        const facory = await ethers.getContractFactory("ExampleToken")
        token = (await facory.connect(owner).deploy()) as ExampleToken
    })

    it("check basic info", async function () {
        expect("Example Token").to.equal(await token.name())
        expect("EXM").to.equal(await token.symbol())
        expect("10000000000000000000000").to.equal((await token.totalSupply()).toString())
    })
})
