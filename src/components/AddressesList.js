import {useSelector }from 'react-redux';

function AddressesList(){
  
  const addresses = useSelector(state => state.addresses)
  console.log(addresses);
  
  return(
    <div>
      {addresses.map(address => (
        <div key={address.id}>
          <h3>{address.id}</h3>
          <h3>{address.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default AddressesList
