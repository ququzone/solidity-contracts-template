import { ethers, upgrades } from "hardhat";

async function main() {
  const ExampleToken = await ethers.getContractFactory("ExampleToken");
  const token = await upgrades.deployProxy(ExampleToken);
  const result = await token.deployed();
  console.log("ExampleToken deployed to:", JSON.stringify(result));
  console.log("ExampleToken deployed to:", token.address);
}

main();
