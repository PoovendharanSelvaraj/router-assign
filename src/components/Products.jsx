import {useState,useEffect} from "react"
import {Outlet, useNavigate} from "react-router-dom"

export const Products=()=>{
    const [data,setData]=useState([])
    const fetching = async ()=>{
        
        fetch("http://localhost:8080/products").then((r)=>r.json()).then(d=>{setData(d)})
    }
    const navigate=useNavigate()
    const handleProduct=(id)=>{
        navigate(`/products/${id}`)
    }
   useEffect(()=>{
       fetching()
   },[])

    return (
        <div >
           
            <div style={{margin:"auto",width:"100vh",display:"flex",justifyContent:"space-between"}}>
            <ul style={{borderRight:"1px solid gray"}}>
            {
                data.map((d)=>{
                  return  <li key={d.id}><h2>{d.name}  <button onClick={()=>handleProduct(d.id)}>more details</button></h2>
                  
                  </li> 
                })
            }
            </ul>
          
           <div>Product <Outlet/></div>
            </div>
            
        </div>
    )
}