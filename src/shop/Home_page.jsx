import axios from "axios";
import { createContext, useEffect, useState } from "react";
//*state management by context

//?
import { ProfileContext } from "../components/context";
import { useContext } from "react"






const HomePage = () => {
    //*states
    // const[products,setProducts] = useState([]) 
    const{products,setProducts}=useContext(ProfileContext)
    const [isInCart,setIsinCart]=useState(true)
    //?
    // const [price,setPrice]=useState(100)
    
    //*API receiver
    useEffect(()=>{
        axios.get("https://reqres.in/api/RESOURCE").then((response)=>{
            setProducts(response.data.data)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    //*functions
    const handelIncrease = (index)=>{
        const newProducts = [...products]
        newProducts[index].count = (newProducts[index].count || 0) + 1;
        setProducts(newProducts)
    }
    const handleDecrease = (index)=>{
        const newProducts = [...products];
        newProducts[index].count = (newProducts[index].count || 0) - 1;
        if(newProducts[index].count  <0) return newProducts[index].count = 0
        setProducts(newProducts)
    }
    //?
    const handlePeice=(index)=>{
        const newProducts=[...products];
        const countOfProduct = newProducts[index].count
        newProducts[index].price = (countOfProduct * 100)
        setProducts(newProducts)
    }
    const handleReset=(index)=>{
        const newProducts = [...products]
        newProducts[index].count = 0
        setProducts(newProducts)
    }
    return(
        <>
            <div className="row">
                {products.map((product,index)=>{
                    return (
                      <div className="col-4 border border-2 border-dark-subtle  p-3">
                        <h4>Productname: {product.name}</h4>
                        <br/>
                        <h5>Year: {product.year}</h5>
                        <h5>Color: {product.color}</h5>
                        <p>phantom_value: {product.pantone_value}</p>
                        <button onClick={()=>handelIncrease(index)} className="m-2 btn btn-md btn-success spinner-border">+</button>
                        <h className="text text-danger">{product.count || 0}</h>
                        <button onClick={()=>handleDecrease(index)} className="m-2 btn btn-md btn-danger spinner-border">-</button>
                         
                        <button onClick={()=>handlePeice(index)} className="m-2 btn btn-md btn-warning ">price:{product.price}$</button>
                        {product.count > 0 && <button onClick={()=>handleReset(index)} className="btn btn-info">reset cart</button>}
                      </div>
                    );
                })}
            </div>
        </>
    )
}
 
export default HomePage;