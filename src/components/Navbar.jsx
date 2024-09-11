import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
//*logos and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faBagShopping ,faSearch} from "@fortawesome/free-solid-svg-icons"
import { ShopContext } from "../App";
import "./nav.css"

const Navbar = () => {
    //*states
    const[isVisible,setIsVisible]=useState(false)
    //*context
    const{shopItems}=useContext(ShopContext)
    //*context function for count our products and show it in navbar
    const itemCount = shopItems.reduce((prev,current)=>{
      return prev + current.count
    },0)
    //*functions
    const visible = ()=>{
        setIsVisible(!isVisible)
        
    }
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg bg-danger ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#" style={{fontWeight:'bold'}}>
              @Khashayar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link style={{color:'white'}} class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className=" nav-link active"
                    aria-current="page"
                    to="/store"
                  >
                    Store
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{color:"white"}} className="nav-link" to="/login">
                    login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link  class="nav-link" to="/support">
                    Support
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link 
                    style={{color:'white'}}
                    onClick={visible}
                    class="nav-link dropdown-toggle"
                    role="button"
                  >
                    Dropdown
                  </Link>
                  {isVisible && (
                    <div>
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            About Us
                          </a>
                        </li>
                        <li className="nav-item">
                          <Link style={{color:'white'}} className="nav-link" to="/account">
                            Create_Account
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li class="nav-item">
                  <Link class="nav-link " aria-disabled="true" to="/cart">
                    <FontAwesomeIcon icon={faBagShopping} />
                    <span className="cart-item-count">{itemCount || 0}</span>
                  </Link>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success btn-warning"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
}
 
export default Navbar;