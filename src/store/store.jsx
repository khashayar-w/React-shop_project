import { useContext } from "react";
import { ShopContext } from "../App";

const Store = () => {
    //*context
    const{shopItems,setShopItems,countOfproducts,setCountOfProducts} = useContext(ShopContext)
    //*functions
    const handleIncrease=(index)=>{
        const newproducts =[...shopItems]
        newproducts[index].count = (newproducts[index].count || 0) + 1
        setShopItems(newproducts)
    };
    const handleDecrease=(index)=>{
        const newProducts = [...shopItems];
        newProducts[index].count = (newProducts[index].count || 0) - 1;
        if (newProducts[index].count < 0) return (newProducts[index].count = 0);
        setShopItems(newProducts);
        
    }
    return ( 
        <> 
            <h1>Store</h1>
            <div className="row  m-5">
                    {
                        shopItems.map((shopItem,index)=>{
                            return(
                                <div className="col-3 p-4 m-1 " style={{borderRadius:'25px',boxShadow:'0px 2px 8px 0px rgba(0,0,0,.2)'}}>
                                    <img style={{ height:"70%",width:'100%',borderRadius:"25%"}} src={shopItem.img} alt="" />
                                    <h4>{shopItem.name}</h4>
                                    <h5>{shopItem.price}</h5>
                                    <h4 className="text-warning text-bg-dark">Cart{shopItem.count||0}</h4>
                                    <button onClick={()=>handleIncrease(index)} className="btn btn-md btn-success">+</button>
                                    {shopItem.count>0&&(<button onClick={()=>handleDecrease(index)} className="btn btn-md btn-danger">-</button>)}
                                </div>
                            )
                        })
                    }
            </div>
        </>
     );
}
 
export default Store;