import * as dotenv from "dotenv"
import fs from "fs"
import type { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-preprocessor"
import "./tasks"

dotenv.config()

function getRemappings() {
    return fs
        .readFileSync("remappings.txt", "utf8")
        .split("\n")
        .filter(Boolean)
        .map((line) => line.trim().split("="))
}

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: "0.8.17",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 10000,
                    },
                },
            },
        ],
    },
    paths: {
        sources: "./src", // Use ./src rather than ./contracts as Hardhat expects
        cache: "./cache_hardhat", // Use a different cache for Hardhat than Foundry
    },
    // This fully resolves paths for imports in the ./lib directory for Hardhat
    // @ts-ignore
    preprocess: {
        eachLine: () => ({
            transform: (line: string) => {
                if (line.match(/^\s*import /i)) {
                    getRemappings().forEach(([find, replace]) => {
                        if (line.match(find)) {
                            line = line.replace(find, replace)
                        }
                    })
                }
                return line
            },
        }),
    },
    mocha: {
        timeout: 200000, // 200 seconds max for running tests
    },
}

export default config
