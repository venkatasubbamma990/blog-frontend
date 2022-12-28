import React from "react";
import {Link} from 'react-router-dom';
import './Header.css'
let Header = () =>{
    return(
        <div>
           <nav className="nav">
            <h1>Blog App</h1>
          
            <h2> <Link to="/homepage" >Home</Link></h2>
            <h2><Link to="/createpost">Createpost</Link></h2>
           
            

           </nav>
        </div>
    )
}
export default Header