import {BrowserRouter as Br ,Routes,Route} from "react-router-dom"
import Login from "./Login/login";
import ShoppingCart from "./cart/Cart-page";
import HomePage from "./Home/Home_page";
import Navbar from "./components/Navbar";
import Store from "./store/store";
import Support from "./support/support";
import { useState,createContext } from "react";
//* imgs for our products
import img1 from "./img/img1.jpg"
import img2 from "./img/img2.jpg"
import img3 from "./img/img3.jpg"
import CreateAccount from "./Login/Create_account";
//* context
export const ShopContext = createContext()
const App = () => {
    //*state of products
    const[shopItems,setShopItems]=useState([
        {id:1,name:'curology',price:"700$",img:img1},
        {id:2,name:'perfume',price:'1800$',img:img2},
        {id:3,name:'smoothy',price:"20$",img:img3},
    ]);
    //*state for count of shopping cart
    const[countOfproducts,setCountOfProducts]=useState([])
    return ( 
        <div className="text-center">
            <ShopContext.Provider value={{countOfproducts,setCountOfProducts,shopItems,setShopItems}}>
                <Br>
                <Navbar/>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/store" element={<Store/>}/>
                        <Route path="/cart" element={<ShoppingCart/>}/>
                        <Route path="/support" element={<Support/>}/>
                        <Route path="/account" element={<CreateAccount/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="*" element={<h2>Nothing Found...</h2>}/>
                    </Routes>
                </Br>
            </ShopContext.Provider>
        </div>
     );
}
 
export default App;