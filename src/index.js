import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
// import { ChakraProvider as Router, Routes,Route} from "@chakra-ui/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Homepage/Home'
import Nation from './components/News/Nation';
import South from './components/News/South';
import World from './components/News/World';
import Entertainment from './components/News/Entertainment';
import Education from './components/News/Education';
import Sports from './components/News/sports';
import Technology from './components/News/Technology';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Routes>
    
      <Route path='/' element={ <App />}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/Nation' element={<Nation/>}/>
      <Route path='/South' element={<South/>}/>
      <Route path='/World' element={<World/>}/>
      <Route path='/Entertainment' element={<Entertainment/>}/>
      <Route path='/Education' element={<Education/>}/>
      <Route path='/Sports' element={<Sports/>}/>
      <Route path='/Technology' element={<Technology/>}/>
    
    </Routes>
  </Router>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
