import { Link } from "react-router-dom"



export const Navbar =()=>{
  return (
    <div>
     <div style={{display:"flex",width:"40%",margin:"auto"}}> 
      <Link to="/" ><h1>Home</h1></Link>
      <Link to="/about" ><h1>About</h1></Link>
      <Link to="/products" ><h1>Products</h1></Link>
     </div>
    </div>
  )
}