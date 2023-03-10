import './App.css';
import React from 'react'
import {useSelector} from 'react-redux';
import AddressForm from './components/AddressForm';
import AddressesList from './components/AddressesList';
import ProposalForm from './components/ProposalForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddressesList/>} />
        <Route path='/create' element={<AddressForm/>} />
        <Route path='/edit/:id' element={<AddressForm/>} />
        <Route path='/propose/' element={<ProposalForm/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
