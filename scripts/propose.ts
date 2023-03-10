  //@ts-ignore
import { ethers, network } from "hardhat"
import { moveBlocks } from "../utils/move-blocks";
import * as fs from "fs";

const proposalDescription = "Proposal #1";
export async function propose(args: any[], functionToCall: string, proposalDescription: string) {
  const governor = await ethers.getContract("GovernorContract");
  const box = await ethers.getContract("Box");
  const encodedFunctionCall = box.interface.encodeFunctionData(
    functionToCall,
    args
  );
  console.log(`Proposing ${functionToCall} on ${box.address} with ${args}`);
  console.log(`Proposal Description: ${proposalDescription}`);
  const proposeTx = await governor.propose(
    [box.address],
    [0],
    [encodedFunctionCall],
    proposalDescription
  )
  const proposeReceipt = await proposeTx.wait(1);

  if (["localhost","hardhat"].includes(network.name)){
    await moveBlocks(1+1); //VOTING DELAY
  }
 
  const proposalId = proposeReceipt.events[0].args.proposalId; 
  let proposals = JSON.parse(fs.readFileSync("proposals.json", "utf8"));
  proposals[network.config.chainId!.toString()].push(proposalId.toString());
  fs.writeFileSync("proposals.json", JSON.stringify(proposals));
}

propose([77],"store", proposalDescription)
  .then (() => process.exit(0))
  .catch((error) => {
    console.log('error', error);
    process.exit(1);
  })
