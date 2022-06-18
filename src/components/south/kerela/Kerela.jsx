import React,{useState,useEffect} from "react"
import styles from "./Kerela.module.css"
import axios from "axios";




const Kerela=()=>{
  
        const[k,setK]=useState([])
        useEffect(() => {
            axios.get(" http://localhost:8080/kerala").then((r) => {
             console.log(r.data)
            setK(r.data);
            });
          }, []);
    return (
        <div className={styles.k_outer}>
          <hr></hr>
          <hr></hr>
          <h3 >KERELA</h3>
          <div className={styles.k_second}  >
          {k.map((data) => (
            <div className={styles.k_third} >
                <div>
                <img className={styles.k_fourth} src={data.image}/>
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
export default Kerela;