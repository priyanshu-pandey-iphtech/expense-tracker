import { useState } from 'react'
import './App.css'
import FrontPage from './Component/FrontPage'
import Dashboard from './Component/Dashboard';
import Add_transaction from './Component/AddTransaction';
import { ThemeProvider } from './Component/Themecontext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/add_transaction" element={<Add_transaction />} />



          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
