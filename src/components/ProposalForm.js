import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addProposal} from "../features/proposals/ProposalSlice"
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid'; 



import React from 'react'

function ProposalForm(){

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [proposal, setProposal] = useState({
      description:'',
  })
 
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
