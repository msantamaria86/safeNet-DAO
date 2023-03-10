import {useState} from 'react';
import { writeContract } from '@wagmi/core'
import {useDispatch} from 'react-redux';
import {addProposal} from "../features/proposals/ProposalSlice"
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid'; 
// import abi from "../../artifacts/contracts/Box.sol/Box.json"



import React from 'react'

async function ProposalForm(){

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [proposal, setProposal] = useState({
      description:'',
  })

  // const { hash } = await writeContract({
  //   mode: 'recklesslyUnprepared',
  //   abi: wagmigotchiABI,
  //   address: '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853    ',
  //   functionName: 'feed',
  // })
 
  const handleChange = e => {
    setProposal({
      ...proposal,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e =>{
    e.preventDefault();
    dispatch(addProposal({
      ...proposal,
      id: uuid(),
    }))
    navigate('/')
  }
 
   return( 
    <form onSubmit={handleSubmit}>
      <textarea name="description" onChange={handleChange} placeholder="description"></textarea>
      <button>Agregar</button>
    </form>  
  )
}

export default ProposalForm
