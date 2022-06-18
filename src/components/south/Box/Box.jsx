 import React,{useState,useEffect} from "react"
import styles from "./Box.module.css"
import axios from "axios";




const Box=()=>{
  
        const[telangana,setTelangana]=useState([])
        useEffect(() => {
            axios.get(" http://localhost:8080/telanaga").then((r) => {
             console.log(r.data)
            setTelangana(r.data);
            });
          }, []);
    return (
        <div className={styles.box_outer}>
          <hr></hr>
          <hr></hr>
          <h3 >TELANGANA</h3>
          <div className={styles.box_second}  >
          {telangana.map((data) => (
            <div className={styles.box_third} >
                <div>
                <img className={styles.box_fourth} src={data.image}/>
                </div>
                <div >
              <h2 >{data.des}</h2>
              <p>{data.title}</p>
              </div>
            
            </div>
            

          ))}
        </div>


         </div>
    )

}
export default Box;