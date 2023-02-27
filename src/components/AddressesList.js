import {useSelector, useDispatch }from 'react-redux';
import { deleteAddress } from '../features/addresses/AddressSlice';
import { Link } from 'react-router-dom';

function AddressesList(){
  
  const addresses = useSelector(state => state.addresses)
  const dispatch = useDispatch()
  console.log(addresses);
  
  const handleDelete = (id) => {
    dispatch(deleteAddress(id))
  }

  return(

    <div>
      <header>
        <h1>Addresses: {addresses.length}</h1>
        <Link to="/create"> Create task </Link>
      </header>
      {addresses.map(address => (
        <div key={address.id}>
          <h3>{address.title}</h3>
          <h3>{address.description}</h3>
          <button onClick={() => handleDelete(address.id)}>Delete</button>
          <Link to={`/edit/${address.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  )
}

export default AddressesList
