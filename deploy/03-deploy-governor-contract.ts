import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployGovernorContract: DeployFunction = async function(
  hre: HardhatRuntimeEnvironment
) {
  // @ts-ignore
  const {getNamedAccounts, deployments} = hre;
  const {deploy, log, get} = deployments;
  const {deployer} = await getNamedAccounts();
  const timeLock = await get("TimeLock");
  const governanceToken = await get("GovernanceToken");
  log("Deploying governor")
  await deploy("GovernorContract", {
    from: deployer,
    args: [
      governanceToken.address,
      timeLock.address,
      1,
      5,
      1
    ],
    log: true,
  })
};

export default deployGovernorContract;
