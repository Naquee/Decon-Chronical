import React,{useState,useEffect} from "react";
import axios from "axios";
import styles from "./Right.module.css"

const Right=()=>{

    const[right,setRight]=useState([])
    useEffect(() => {
        axios.get(" http://localhost:8080/top-news").then((r) => {
         console.log(r.data)
        setRight(r.data);
        });
      }, []);
      return (
        <div>
      
          <br />
          <div className={styles.right}  >
          {right.map((data) => (
            <div className={styles.second_right}>
                <div className= {styles.zero_right}>
                <img className={styles.third_right} src={data.image}/>
                </div>
                <div className={styles.fourth_right} >
              <p >{data.heading}</p>
            
            <hr></hr>
              </div>
          
            
            </div>
            

          ))}
        </div>
        </div>
      );


}
export default Right