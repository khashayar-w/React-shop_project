import React, { useState } from "react";
import { Link } from "react-router-dom";
//*logos and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faBagShopping ,faSearch} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    //*states
    const[isVisible,setIsVisible]=useState(false)
    //*functions
    const visible = ()=>{
        setIsVisible(!isVisible)
        
    }
    return ( 
        <React.Fragment>
            <nav class="navbar navbar-expand-lg bg-danger ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Khashayar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className=" nav-link active" aria-current="page" to="/store">Store</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/support">Support</Link>
        </li>
        <li class="nav-item dropdown">
          <Link onClick={visible} class="nav-link dropdown-toggle"  role="button" >
            Dropdown
          </Link>
          {!isVisible && (
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">More</a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li class="nav-item">
          <Link class="nav-link " aria-disabled="true" to='/cart'><FontAwesomeIcon icon={faBagShopping}/></Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success btn-warning" type="submit"><FontAwesomeIcon icon={faSearch}/></button>
      </form>
    </div>
  </div>
</nav>
        </React.Fragment>
     );
}
 
export default Navbar;