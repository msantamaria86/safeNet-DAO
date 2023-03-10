// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable {
  uint256 private value;

  // Emitted when the stored value changes
  event ValueChanged(uint256 newValue);

  // Stores a new value in the contract
  function store(uint256 newValue) public onlyOwner {
    value = newValue;
    emit ValueChanged(newValue);
  }

  // Reads the last stored value
  function retrieve() public view returns (uint256) {
    return value;
  }
}


// SPDX-License-Identifier: MIT

// pragma solidity ^0.8.0;

// contract DAO {
//     struct Proposal {
//         address creator;
//         string description;
//         uint yesVotes;
//         uint noVotes;
//         bool executed;
//         mapping(address => bool) voted;
//     }

//     address public owner;
//     uint public numProposals;
//     mapping(uint => Proposal) public proposals;

//     constructor() {
//         owner = msg.sender;
//         numProposals = 0;
//     }

//     function createProposal(string memory _description) public {
//         require(msg.sender == owner, "Only the owner can create proposals");
//         proposals[numProposals] = Proposal(msg.sender, _description, 0, 0, false);
//         numProposals++;
//     }

//     function vote(uint _proposalId, bool _yesVote) public {
//         Proposal storage proposal = proposals[_proposalId];
//         require(!proposal.voted[msg.sender], "You have already voted");
//         require(!proposal.executed, "The proposal has already been executed");
//         if (_yesVote) {
//             proposal.yesVotes++;
//         } else {
//             proposal.noVotes++;
//         }
//         proposal.voted[msg.sender] = true;
//     }

//     function executeProposal(uint _proposalId) public {
//         Proposal storage proposal = proposals[_proposalId];
//         require(msg.sender == owner, "Only the owner can execute proposals");
//         require(proposal.yesVotes > proposal.noVotes, "The proposal was not approved");
//         require(!proposal.executed, "The proposal has already been executed");
//         proposal.executed = true;
//         // If the proposal is approved, create a new sub-DAO
//         SubDAO1 subDAO1 = new SubDAO1();
//     }
// }

// contract SubDAO1 {
//     address public owner;
//     uint public numProposals;
//     mapping(uint => DAO.Proposal) public proposals;

//     constructor() {
//         owner = msg.sender;
//         numProposals = 0;
//     }

//     function createProposal(string memory _description) public {
//         require(msg.sender == owner, "Only the owner can create proposals");
//         proposals[numProposals] = DAO.Proposal(msg.sender, _description, 0, 0, false);
//         numProposals++;
//     }

//     function vote(uint _proposalId, bool _yesVote) public {
//         DAO.Proposal storage proposal = proposals[_proposalId];
//         require(!proposal.voted[msg.sender], "You have already voted");
//         require(!proposal.executed, "The proposal has already been executed");
//         if (_yesVote) {
//             proposal.yesVotes++;
//         } else {
//             proposal.noVotes++;
//         }
//         proposal.voted[msg.sender] = true;
//     }

//     function executeProposal(uint _proposalId) public {
//         DAO.Proposal storage proposal = proposals[_proposalId];
//         require(msg.sender == owner, "Only the owner can execute proposals");
//         require(proposal.yesVotes > proposal.noVotes, "The proposal was not approved");
//         require(!proposal.executed, "The proposal has already been executed");
//         proposal.executed = true;
//         // If the proposal is approved, create a new sub-DAO
//         SubDAO2 subDAO2 = new SubDAO2();
//     }
// }

// contract SubDAO2 {
//     address public owner;
//     uint public numProposals;
//     mapping(uint => DAO.Proposal) public proposals;

//     constructor() {
//         owner = msg.sender;
//         numProposals = 0;
//     }

//     function createProposal(string memory _description) public {
//         require(msg.sender == owner, "Only the owner can create proposals");
//         proposals[numProposals] = DAO.Proposal
