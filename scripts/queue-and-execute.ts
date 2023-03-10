  //@ts-ignore
import { ethers, network } from "hardhat";
import { moveBlocks } from "../utils/move-blocks";
import { moveTime } from "../utils/move-time";


export async function queueAndExecute() {
  const args = [77];
  const box = await ethers.getContract("Box");
  const encodedFunctionCall = box.interface.encodeFunctionData('store', args);
  const descriptionHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("Proposal #1"))
  
  const governor = await ethers.getContract("GovernorContract");
  console.log('Queueing...');
  const queueTx = await governor.queue([box.address], [0], [encodedFunctionCall], descriptionHash)
  await queueTx.wait(1);

  if (["localhost","hardhat"].includes(network.name)){
    await moveTime(1+1) //min delay
    await moveBlocks(1); //VOTING DELAY
  }

  console.log('Executing');
  const executeTx = await governor.execute([box.address], [0], [encodedFunctionCall], descriptionHash)
  await executeTx.wait(1);

  const boxNewValue = await box.retrieve();
  console.log(`New Box Value: ${boxNewValue.toString()}`);
}
  
  
queueAndExecute()
  .then(()=> process.exit(0))
  .catch((error) => {
  console.error(error);
  process.exit(1)
})
