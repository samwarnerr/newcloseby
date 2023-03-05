import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Navbar, Homepage } from './components';

function App () {
  let component 
  switch (window.location.pathname) {
    case "/":
      component = <Homepage /> 
      break 
    case "/about":
      component = <About />
      break
  }

  return (
    <>
      <Navbar />
      {component}
    </>

  )
}

export default App;