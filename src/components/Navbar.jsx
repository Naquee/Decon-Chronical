import React from 'react'
import './Navbar.css'


import { HamburgerIcon } from '@chakra-ui/icons'
import { Checkbox } from '@chakra-ui/react'

import { Link } from "react-router-dom";
import { FaFacebookF ,FaTwitter,FaInstagram,FaAppStore,FaHome,FaAngleDown} from "react-icons/fa";
import Dates from './Date';
import Sidebar from './Sidebar';

const Navbar = () => {
  return (
    <div
    className='position'>
    <Sidebar />
      <div className='upperTop'>
        
           <div className='homelogo' >
         <Link to="/">  <img  className='you'
          src="https://www.deccanchronicle.com/images/DeccanChronicle_Logo.webp" /></Link>
        <div className='date'><Dates />  </div>    
     </div>
  


       <div className='navia'>
                
 <div ><Link to="/home"><FaHome style={{color:"black"}}/></Link></div> 
        <div ><Link style={{color:"black",textDecoration:"none"}} to="/Nation">Nation</Link></div> 
        <div ><Link style={{color:"black",textDecoration:"none"}} to="/South">South</Link></div> 
         <div ><Link style={{color:"black",textDecoration:"none"}} to="/World">World</Link></div>       
          <div ><Link style={{color:"black",textDecoration:"none"}} to="/Entertainment">Entertainment</Link></div>
         <div ><Link style={{color:"black",textDecoration:"none"}} to="/Education">Education</Link></div>
         <div ><Link style={{color:"black",textDecoration:"none"}} to="/Sports">Sports</Link></div>
         <div ><Link style={{color:"black",textDecoration:"none"}} to="/Technology">Technology</Link></div>
         <div ><Link style={{color:"black",textDecoration:"none"}} to="/Lifestyle">LIfestyle</Link></div>
         <div ><Link style={{color:"black",textDecoration:"none"}} to="/Gallery">Gallery</Link></div>
        <div >More...<span><FaAngleDown style={{marginTop:"5px"}}/></span></div> 
       

   </div> 
   <hr className='left'></hr>
   
   
   







    </div>
    </div>
  )
}

export default Navbar