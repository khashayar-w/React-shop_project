import React from "react";
import { Link } from "react-router-dom";
import "../Login.css";

const Login = () => {
  return (
    <div className="body">
        <div className="container">
          <form className="form" onSubmit={(e)=>e.preventDefault()}>
            <h1 style={{color:'white'}}>Login</h1>
            <input type="text" placeholder="Email...."/>
            <input type="password" placeholder="Password"/>
            <button className="btn btn-lg btn-warning ">Submit</button>
            <a  href="#">Forget password?</a>
            <span >Don't have an account? <Link to="/account">Craete account</Link></span>
          </form>
        </div>
    </div>
  );
};

export default Login;
