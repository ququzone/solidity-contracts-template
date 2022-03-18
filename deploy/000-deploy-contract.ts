module.exports = async ({ ethers, getNamedAccounts, deployments }) => {
  const { deploy } = deployments

  const { log } = deployments
  const namedAccounts = await getNamedAccounts()
  const { deployer } = namedAccounts

  const deployResult = await deploy("ExampleToken", {
    from: deployer,
    args: [],
    log: true,
    deterministicDeployment: false,
  })
  if (deployResult.newlyDeployed) {
    log(
      `contract ExampleToken deployed at ${deployResult.address} using ${deployResult.receipt.gasUsed} gas`
    )
  }
}
module.exports.tags = ["ExampleToken"]
