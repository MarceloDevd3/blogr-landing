import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Nav from './components/navbar/navbar';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import './App.css'

function App() {

  return (
    <>
     <Nav/>
     <Main/>
     <Footer />
    </>
  )
}

export default App
