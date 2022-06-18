import React,{useState,useEffect} from "react"
import styles from "./Ap.module.css"
import axios from "axios";




const Ap=()=>{
  
        const[ap,setAp]=useState([])
        useEffect(() => {
            axios.get(" http://localhost:8080/Ap").then((r) => {
             console.log(r.data)
            setAp(r.data);
            });
          }, []);
    return (
        <div className={styles.ap_outer}>
          <hr></hr>
          <hr></hr>
          <h3 >ANDHRA PRADESH</h3>
          <div className={styles.ap_second}  >
          {ap.map((data) => (
            <div className={styles.ap_third} >
                <div>
                <img className={styles.ap_fourth} src={data.image}/>
                </div>
                <div >
              <h2 >{data.des}</h2>
             
              </div>
            
            </div>
            

          ))}
        </div>


         </div>
    )

}
export default Ap;