import * as fs from "fs";
  //@ts-ignore
import { network, ethers } from "hardhat";
import { moveBlocks } from "../utils/move-blocks";

const index = 0;
async function main(proposalIndex: number){
  const proposals = JSON.parse(fs.readFileSync("proposals.json", "utf8"));
  const proposalId = proposals[network.config.chainId!][proposalIndex];
  // 0=against, 1=approves, 2=abstains
  const  voteWay = 1;
  const governor = await ethers.getContract("GovernorContract");
  const voteTxResponse = await governor.castVoteWithReason(proposalId, voteWay, "kinda cool");
  await voteTxResponse.wait(1);

  if (["localhost","hardhat"].includes(network.name)){
    await moveBlocks(1+1); //VOTING DELAY
  }
  console.log('voted!, yeepee!!', voteTxResponse);
}

main(index)
  .then(()=> process.exit(0))
  .catch((error) => {
  console.error(error);
  process.exit(1)
})
