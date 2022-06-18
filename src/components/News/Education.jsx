

import React,{useState, useEffect} from 'react'
import Footer from '../Footer';
import Sidebar from '../Sidebar';


const Education= () => {
  const [user,setUser]=useState([]);

  const fetchData=()=>{
    fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6f43be9f49cf4702b914421834ff3c3e")
    .then((response)=>{
      return response.json();

    })
    .then((data)=>{
      const gagan=data.articles
      // console.log(gagan)
      setUser(gagan)

    })

  }
  useEffect(()=>{
    fetchData();

  },[])

  return (
    <>
    <Sidebar/>
    
    <div className='container my-3'>


    </div>
    <div className='container'>
    <div className='row'>

   

    
       {
        user.map((value) => {
          return (
            <div className='col-3'>

        

            <div class="card" style={{width:  "18rem" , height:"400px", width:"300px", margin:"10px"}}>
               <img src={value.urlToImage} class="card-img-top" alt="..."/>
               <div class="card-body">
                 <h5 class="card-title">{value.title}</h5>
               
               </div>
    </div>
    
       </div>

          );
        })
       }

      </div>
      </div>
      <Footer/>
  
    
    
    </>
  );
}

export default Education