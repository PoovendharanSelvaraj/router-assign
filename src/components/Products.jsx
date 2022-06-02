import {useState,useEffect} from "react"


export const Products=()=>{
    const [data,setData]=useState([])
    const fetching = async ()=>{
        fetch("http://localhost:8080/products").then((r)=>r.json()).then(d=>{setData(d)})
    }
   useEffect(()=>{
       fetching()
   },[])

    return (
        <div>
            <h1>Products</h1>
            <ul>
            {
                data.map((d)=>{
                  return  <li><h2>{d.name}</h2></li> 
                })
            }
            </ul>
        </div>
    )
}