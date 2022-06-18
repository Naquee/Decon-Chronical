import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { SidebarData2 } from './SidebarData';
import { SidebarData3 } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';


function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  
  return (
    
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
        <div style={{display:"flex",gap:"10px",paddingLeft:"80px"}}>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} /> 
          </Link>
         
          <h6 className='top-heading'>e-Paper | Sunday Chronicle</h6>
            <a className='sticker-img' href="https://www.facebook.com/deccannews/"> <AiIcons.AiFillFacebook className='stickers' /></a>
            <a className='sticker-img'  href="https://twitter.com/DeccanChronicle/">  <AiIcons.AiFillTwitterSquare className='stickers' /></a>
            <a className='sticker-img' href="https://www.instagram.com/deccanchronicle_official/">  <AiIcons.AiOutlineInstagram  className='stickers'/></a>
            <a className='sticker-img' href="https://www.deccanchronicle.com/download-deccan-chronicle-app"> <img style={{ width:"25px" , height:"25px"}} src='https://www.deccanchronicle.com/images/app_store_iconWhite.png'></img></a>
           
           
          </div>
          
         <div className='hello'> 
         <input  type="checkbox" />
         <h6 className='top-heading'>Auto Refresh | Corporate Insolvency Resolution Process</h6></div>
          
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>

              <img className="sidebar-img" src='https://d2u6vujtbrga6l.cloudfront.net/images/logo.png'></img>
                <AiIcons.AiOutlineArrowLeft className='sidebar-arrow'/>
               
              </Link>
            </li>
            <div className='scrollbar'>
         <h4>Nation</h4>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={() => window.location.reload()}>
                  <Link to={item.path}>
                   <div  > {< AiIcons.AiOutlineDoubleRight style={{ color: "black"}}/>}</div>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
   <h4>South</h4>
            {SidebarData2.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={() => window.location.reload()}>
                  <Link to={item.path}>
                   <div  > {< AiIcons.AiOutlineDoubleRight style={{ color: "black"}}/>}</div>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}

    <h4>South</h4>
            {SidebarData2.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={() => window.location.reload()}>
                  <Link to={item.path}>
                   <div  > {< AiIcons.AiOutlineDoubleRight style={{ color: "black"}}/>}</div>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} 

    <h4>World</h4>
            {SidebarData3.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={() => window.location.reload()}>
                  <Link to={item.path}>
                   <div  > {< AiIcons.AiOutlineDoubleRight style={{ color: "black"}}/>}</div>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} 
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
     
  );
}

export default Sidebar;
