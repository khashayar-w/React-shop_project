import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import HomePage from "./shop/Home_page";
import CartPage from "./cart/Cart-page";
import NavBar from "./components/Navbar";
import {  useState } from "react";

import { ProfileContext } from "./components/context";


const App = () => {
    const [products,setProducts]=useState([])
    return (
      <div className="m-2 text-center">
        <ProfileContext.Provider value={{products,setProducts}}>
            <Router>
                <NavBar />
                <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Router>
        </ProfileContext.Provider>
      </div>
    );
}
 
export default App;