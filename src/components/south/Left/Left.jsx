import React,{useState,useEffect} from "react"
import axios from "axios";
import styles from "./Left.module.css"

const Left=()=>{
    const[left,setLeft]=useState([])
    useEffect(() => {
        axios.get(" http://localhost:8080/highlite").then((r) => {
         console.log(r.data)
        setLeft(r.data);
        });
      }, []);
      return (
        <div>
     
       <h3>SOUTH</h3>
         
          <div className={styles.outer}  >
          {left.map((data) => (
            <div className={styles.second_outer} >
                <div>
                <img className={styles.third_outer} src={data.image}/>
                </div>
                <div className={styles.fourth_outer} >
              <h2 >{data.heading}</h2>
              <p>{data.description}</p>
              </div>
            
            </div>
            

          ))}
        </div>
        </div>
      );

}
export default Left;