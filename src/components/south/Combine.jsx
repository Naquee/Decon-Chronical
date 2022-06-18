import React from "react"
import styles from "./Combine.module.css"
import Left from "./Left/Left"
import Right from "./Right/Right"
import South from "./mid/South"
import Navbar from "./Navbar/Navbar"
import Line from "./Line/Line"
import Box from "./Box/Box"
import Ap from "./Ap/Ap"
import Tamil from "./tamil/Tamil"
import Karnataka from "./karnatak/Karnataka"
import Kerela from "./kerela/Kerela"


const Combine=()=>{

    return(
  <>
        <div className={styles.southnews}>
        <Navbar/>
        <Line/>
     <div className={styles.main}>
    
        <div className={styles.left_box1}>
        <Left/>
        <Right/>
         </div>
       
       <div className={styles.right_box2}>
       <South/>
       </div>
    
   
        </div>

        <div> <Box/></div>
       <Ap/>
       <Tamil/>
       < Karnataka/>
       <Kerela/>




        {/* news div ends */}
        </div>
       
        </>
    )
}
export default Combine;