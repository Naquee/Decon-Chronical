import React,{useState,useEffect} from "react"
import axios from "axios"
import styles from "./South.module.css"

const South=()=>{
    const[data,setData]=useState([])
    useEffect(() => {
        axios.get(" http://localhost:8080/popular").then((r) => {
         console.log(r.data)
        setData(r.data);
        });
      }, []);
      return (
        <>
        <div>
         <div className={styles.zero_bigger}>
          <img className={styles.zero_inner} src="https://tpc.googlesyndication.com/simgad/13134570900656688182?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qn7uTpIPsDCM5RlVzywK0pIJYnFVA"/>
         </div>
        
          <div className={styles.bigger} >
          <h3>Most Popular</h3>
          {data.map((data) => (
            <div className={styles.third_bigger}>
                {/* <img className={styles.second_bigger}src={data.urlToImage}/> */}
              {/* <div>{data.author}</div> */}
              <div> <h4>{data.des}</h4></div>
             <div> <img className={styles.second_bigger}src={data.image}/></div>
            
            </div>
          

          ))}
        </div>
      
        </div>
        </>
      );

}
export default South;