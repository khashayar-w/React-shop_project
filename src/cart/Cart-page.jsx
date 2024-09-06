import { useContext, useState } from "react";
import { ProfileContext } from "../components/context";

const CartPage = () => {
    const {products}=useContext(ProfileContext)
    const[shoppingList,setShoppingList]=useState(products)
        
        return(
            <div className="row">
                {products.map((product)=>{
                    if(product.count >0){
                        return(
                            <div className="col-4 text-bg-warning m-2 text-center p-5">
                                <span>product you choose:{product.name}</span>
                                <span>how many you pick:{product.count}</span>
                            </div>
                        )
                    }else return;
                })}
            </div>
        )

}
export default CartPage;