import './App.css';
import {useSelector} from 'react-redux';
import AddressForm from './components/AddressForm';
import AddressesList from './components/AddressesList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddressesList/>} />
        <Route path='/create' element={<AddressForm/>} />
        <Route path='/edit/:id' element={<AddressForm/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
