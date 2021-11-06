import { Link } from 'gatsby'
import React from 'react'
import * as containerStyles from "../components/container.module.css"


const Navbar = ( ) =>{
     return(
         <>
         <div className={containerStyles.Navbar}>
         <Link  to="/" className={containerStyles.links}>Home</Link>    <br />    
         <Link to="/Contact" className={containerStyles.links}>Contact</Link><br />
         <Link to="/About" className={containerStyles.links}>About</Link>
         <Link to="/product" className={containerStyles.links}>Product</Link>

         </div>
         </>


     )
}
export default Navbar