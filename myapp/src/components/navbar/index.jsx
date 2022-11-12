import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
    
  } from "react-router-dom";
  import "./index.css"


  const Navbar = ()=>{
    return(

       <nav>
       
          <ul>
            <li>
             <Link to ="/food" >FOOD</Link>

            </li>
            <li>
                <Link to="/beaches">BEACHES</Link>
            </li>
            <li>
                <Link to="/mountain">MOUNTAIN</Link>
            </li>
          </ul>

        </nav>
    )
  }

  export default Navbar;