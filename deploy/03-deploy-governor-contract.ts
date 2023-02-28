import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployGovernorContract: DeployFunction = async function(
  hre: HardhatRuntimeEnvironment
) {
  const {getNamedAccounts, deployments} = hre;
  const {deploy, log, get} = deployments;
  const {deployer} = await getNamedAccounts();
  const governanceToken = await get("GovernanceToken");
  const timeLock = await get("TimeLock");
  log("Deploying governor")
  const governorContract = await deploy("GovernorContract", {
    from: deployer,
    args: [
      governanceToken.address,
      timeLock.address,
      1,
      5,
      4
    ],
    log: true,
  })
};

export default deployGovernorContract;
