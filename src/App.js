import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';


import Top from "./components/Top";


import Footer from "./components/Footer";
 

function App() {
  return (
    <div className="App">
      
      <Navbar />   
      
      <div style={{width:"80%", height:"200px"}}/>
      <Top/>  
      <Footer/>

    </div>
  );
}

export default App;
