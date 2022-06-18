import React,{useState,useEffect} from "react"
import styles from "./Tamil.module.css"
import axios from "axios";




const Tamil=()=>{
  
        const[t,setT]=useState([])
        useEffect(() => {
            axios.get(" http://localhost:8080/tamil").then((r) => {
             console.log(r.data)
            setT(r.data);
            });
          }, []);
    return (
        <div className={styles.t_outer}>
          <hr></hr>
          <hr></hr>
          <h3 >TAMIL NADU</h3>
          <div className={styles.t_second}  >
          {t.map((data) => (
            <div className={styles.t_third} >
                <div>
                <img className={styles.t_fourth} src={data.image}/>
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
export default Tamil;