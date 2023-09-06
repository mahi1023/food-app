import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../Utils/cartSlice";

const Cart = ()=>{
   const cartItems =  useSelector((store)=>store.cart.items);
   const disptach = useDispatch();
   console.log("item cart")
   console.log(cartItems);
   const handleClick = ()=>{
     disptach(clearCart())
   }
    return(
        <div className="text-center m-4 p-4 ">
           <h1 className="text-2xl font-bold"> Cart</h1>
           <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black rounded-md text-white" onClick={()=>handleClick()}>Clear Cart</button>
            {cartItems.length === 0 ? (<h2>Please Add Items to the Cart</h2>) : (<ItemList item={cartItems}></ItemList>)}
            
           </div>
        </div>
    )
}

export default Cart