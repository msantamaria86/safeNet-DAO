import './App.css';
import {useSelector} from 'react-redux';
import AddressForm from './components/AddressForm';
import AddressesList from './components/AddressesList';


function App() {
  return (
    <div className="App">
      <h1>SafeNet Addresses</h1>

      <AddressForm/>
      <AddressesList/>
    </div>
  );
}

export default App;
