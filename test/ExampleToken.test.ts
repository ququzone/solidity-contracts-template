import { ethers, waffle } from "hardhat"
import { expect } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
const { deployContract } = waffle

import ExampleTokenArtifact from "../artifacts/contracts/ExampleToken.sol/ExampleToken.json"
import { ExampleToken } from "../types/ExampleToken"

describe("ExampleToken", function () {
  let token: ExampleToken
  let owner: SignerWithAddress

  before(async function () {
    ;[owner] = await ethers.getSigners()

    token = (await deployContract(owner, ExampleTokenArtifact)) as ExampleToken
  })

  it("check basic info", async function () {
    expect("Example Token").to.equal(await token.name())
    expect("EXM").to.equal(await token.symbol())
    expect("10000000000000000000000").to.equal((await token.totalSupply()).toString())
  })
})
