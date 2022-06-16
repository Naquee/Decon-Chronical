import React from 'react'


import { HamburgerIcon } from '@chakra-ui/icons'
import { Checkbox } from '@chakra-ui/react'
import Dates from "./Date"
import { Link } from "react-router-dom";
import { FaFacebookF ,FaTwitter,FaInstagram,FaAppStore,FaHome,FaAngleDown} from "react-icons/fa";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'


const Navbar = () => {
  return (
      <div>
          {/* <div style={{display:"flex", height: "40px", width: "100%", backgroundColor: "#222222", boxShadow: "  rgba(0, 0, 0, 0.35) 0px 5px 15px",color:"white",justifyContent:"space-around" }}> */}
              {/* <div style={{ display: "flex", marginTop: "10px", fontWeight: "bold" }}> */}
                  {/* <HamburgerIcon  /> */}
{/*                  */}
          {/* <div style={{ marginLeft: "15px", marginTop: "-3px" }}><h4 >e-Paper|Sunday Chronicle</h4></div> */}
    {/* <a href="https://www.facebook.com/deccannews/"><FaFacebookF style={{marginLeft:"20px",fontSize:"20px"}}/></a> */}
{/*                 */}
{/*             */}
          {/* <a href='https://twitter.com/DeccanChronicle'><FaTwitter style={{ marginLeft: "10px",fontSize:"20px" }}/></a> */}
          {/* <a href='https://www.instagram.com/deccanchronicle_official/'><FaInstagram style={{ marginLeft: "10px", fontSize: "20px" }} /></a> */}
          {/* <a href='/'><FaAppStore style={{ marginLeft: "10px",fontSize:"20px" }}/></a> */}
{/*           */}
              {/* </div>    */}
              {/* <div style={{ display: "flex", fontWeight: "bold",marginLeft:"5px",marginTop:"10px" }}> */}
          {/* <Checkbox style={{ marginLeft: "5px", marginTop: "-5px", fontSize:"small"}} defaultChecked>Auto Refresh|</Checkbox> */}
{/*      */}
    {/* <h3>Coporate Insolvency Resolution Process</h3>  */}
{/*     */}
{/*    */}
              {/* </div>    */}
{/*                */}
{/*               */}
{/*               */}
{/*               */}
{/*    */}
{/*    */}
{/*                */}
{/*       */}
{/*       */}
          {/* </div>     */}
{/*  */}
          <div style={{ height: "100px", width: "80%", margin: "auto",marginTop:"20px" ,borderBottom:"4px solid black" }}>
         <Link to="/Home">  <img style={{ height: "51px", width: "250", margin: "auto" }} src="https://www.deccanchronicle.com/images/DeccanChronicle_Logo.webp" /></Link>
        <Dates />
        

              

              
      </div>
   


      <div style={{ height: "30px", width: "80%", margin: "auto", borderBottom: "1px solid grey", display: "flex", marginTop: "10px", marginBottom: "10px", justifyContent: "space-between" }}>
                
<div  style={{ height: "100%",fontSize:"20px"}} ><Link to="/home"><FaHome/></Link></div> 
        <div  style={{ height: "100%"}} ><Link to="/Nation">Nation</Link></div> 
        <div style={{height:"100%",}} ><Link to="/South">South</Link></div> 
        <div style={{height:"100%"}} ><Link to="/World">World</Link></div>
        <div style={{height:"100%"}} ><Link to="/Entertainment">Entertainment</Link></div>
 
        <div style={{height:"100%"}} ><Link to="/Jobs">Jobs & Education</Link></div>
 
        <div style={{height:"100%"}} ><Link to="/Sports">Sports</Link></div>
 
        <div style={{height:"100%"}} ><Link to="/Technology">Technology</Link></div>
 
        <div style={{height:"100%"}} ><Link to="/Lifestyle">LIfestyle</Link></div>
 
        <div style={{height:"100%"}} ><Link to="/Gallery">Gallery</Link></div>
 
       <div style={{height:"100%",display:"flex"}} >More...<span><FaAngleDown style={{marginTop:"5px"}}/></span></div> 



   </div>
   
   
   

    </div>
  )
}

export default Navbar