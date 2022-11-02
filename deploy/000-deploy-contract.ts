module.exports = async ({ ethers, getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    log(`Deploying ExampleToken...`)
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
