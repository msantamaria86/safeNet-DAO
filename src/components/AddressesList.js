import {useSelector, useDispatch }from 'react-redux';
import { deleteAddress } from '../features/addresses/AddressSlice';
import React from 'react'
import { Link } from 'react-router-dom';

function AddressesList(){
  
  const addresses = useSelector(state => state.addresses)
  const proposals = useSelector(state => state.proposals)
  console.log(proposals);

  const dispatch = useDispatch()
  
  const handleDelete = (id) => {
    dispatch(deleteAddress(id))
  }

  return(

    <div>
      <header>
        <h1>Addresses: {addresses.length}</h1>
        <Link to="/create"> Add address </Link>
      </header>
      {addresses.map(address => (
        <div key={address.id}>
          <h3>{address.title}</h3>
          <h3>{address.description}</h3>
          <button onClick={() => handleDelete(address.id)}>Delete</button>
          <Link to={`/edit/${address.id}`}>Edit</Link>
        </div>
      ))}

      <h1>proposals: {proposals.length}</h1>
      <Link to="/propose"> Create proposal </Link>

      {proposals.map(proposal => (
        <div>
          <h3>{proposal.description}</h3>
        </div>
      ))}
    </div>
  )
}

export default AddressesList
