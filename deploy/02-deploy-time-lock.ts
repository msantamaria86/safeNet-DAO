import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployTimeLock: DeployFunction = async function (hre:HardhatRuntimeEnvironment) {
  const {getNamedAccounts, deployments} = hre;
  const {deploy, log} = deployments;
  const {deployer} = await getNamedAccounts();
  log("deploying timelock")

  const timeLock = await deploy("TimeLock",{
    from: deployer,
    args: [3600, [], [], '0x0000000000000000000000000000000000000000'],
    log: true,
  })
  
}

export default deployTimeLock;