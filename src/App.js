import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import FormPembelian from './Tugas-9/FormPembelian'
// import TabelBuah from './Tugas-10/TabelBuah'
// import DaftarBuah from './Tugas-10/Buah'
import DataBuah from './Tugas-10/Buah';
import Timer from './Tugas-11/Timer';

function App() {
  return (
    <div>
      <Timer />
      <FormPembelian />
      <br/>
      <DataBuah />
    </div>
  );
}

export default App;