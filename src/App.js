import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";


import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';



import Footer from "./components/Footer";
import Home from "./components/Homepage/Home";
 

function App() {
  return (
    <div >
     
      <Navbar />   
      
      <div style={{width:"80%", height:"100px"}}/>
      <Home/>
      <Footer/>

    </div>
  );
}

export default App;
