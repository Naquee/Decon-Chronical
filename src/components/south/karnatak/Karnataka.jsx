import React,{useState,useEffect} from "react"
import styles from "./Karnataka.module.css"
import axios from "axios";




const Karnataka=()=>{
  
        const[ka,setKa]=useState([])
        useEffect(() => {
            axios.get(" http://localhost:8080/karnatak").then((r) => {
             console.log(r.data)
            setKa(r.data);
            });
          }, []);
    return (
        <div className={styles.ka_outer}>
          <hr></hr>
          <hr></hr>
          <h3 >KARNATAKA</h3>
          <div className={styles.ka_second}  >
          {ka.map((data) => (
            <div className={styles.ka_third} >
                <div>
                <img className={styles.ka_fourth} src={data.image}/>
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
export default Karnataka;