import {useState, useEffect} from 'react';
import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {addAddress, editAddress} from "../features/addresses/AddressSlice"
import {v4 as uuid} from 'uuid'; 
import { useNavigate, useParams } from 'react-router-dom';


function AddressForm(){

  const [address, setAddress] = useState({
    title: '',
    description:'',
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const addresses = useSelector(state => state.addresses)

  const handleChange = e => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e =>{
    e.preventDefault();
    if (params.id){
      dispatch(editAddress(address))
      } else {
      dispatch(addAddress({
        ...address,
        id: uuid(),
      }));
    }
    navigate('/')
  }

  useEffect(() => {
    if (params.id) {
      setAddress(addresses.find(address => address.id === params.id))
      console.log('address',address);
      
    }
  }, [])

  return( 
    <form onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder="title" value={address.title} onChange={handleChange}></input>
      <textarea name="description" placeholder="description" value={address.description} onChange={handleChange}></textarea>
      <button>Agregar</button>
    </form>
    

    
  )
}

export default AddressForm
