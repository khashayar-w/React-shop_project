import { useContext } from "react";
import { ShopContext } from "../App";




const ShoppingCart  = () => {
    //*state
    const {shopItems,setShopItems}=useContext(ShopContext)
    //*functions
    const handleDelete=(index)=>{
        const newproducts = [...shopItems]
        newproducts[index].count = 0
        setShopItems(newproducts)

    }
    return (
      <>
        <h1>your Shopping Cart</h1>
        <div className="row">
            {shopItems.map((shopItem,index)=>{
                if(shopItem.count > 0){
                    return (
                      <div className="col-4">
                          <img style={{width:'300px',height:'60%',borderRadius:'25%'}} src={shopItem.img} alt="" />
                          <h4>{shopItem.name}</h4>
                          <h5>{shopItem.price}</h5>
                          <h4> cart:{shopItem.count}</h4>
                          <button onClick={()=>handleDelete(index)} className="btn btn-lg btn-danger">
                            Delete Item
                          </button>
                      </div>
                    );
                }
            })}
        </div>
      </>
    );
}
 
export default ShoppingCart;