import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {faShoppingCart,faBars} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
//*state management by context
import { profileContext } from "./context";
import { useContext } from "react";


const NavBar = () => {
    const [isVisible,setIsVisible] = useState(false)
    return(
        <div className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand">khashayr</a>
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <Link className=" nav-link text-light" to={'/'}>Home</Link>
                        
                    </li>
                    <li className="nav-item text-light">
                        <Link className=" nav-link text-light " to={'/cart'}>cart <FontAwesomeIcon icon={faShoppingCart}/></Link>
                        
                    </li>      
                </ul>
                <button onClick={()=>setIsVisible(!isVisible)}><FontAwesomeIcon icon={faBars}/></button>
                {isVisible &&(
                    <div >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>News</Link>
                        </li>
                    </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
 
export default NavBar;