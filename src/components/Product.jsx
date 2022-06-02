import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'







const Product = () => {
    const [product, setproduct] = useState({})
    const {id}=useParams();
   
    useEffect(() => {
      if(id){
        fetch(`http://localhost:8080/products/${id}`).then(r=>r.json()).then(d=>setproduct(d))
      }
     else{
         setproduct("No data Found")
     }
    
    }, [id])
    
  return (
    <div style={{width:"50vh",border:"1px solid black",borderRadius:"5px",margin:"auto"}}>
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>      
            </tr>
            <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        </table>
    </div>
  )
}

export default Product