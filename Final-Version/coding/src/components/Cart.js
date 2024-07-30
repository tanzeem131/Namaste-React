import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    };
    return(
        <div>
            <div className="text-center font-bold text-4xl p-4 m-4">
                Cart
            </div>
            <div className="text-end w-6/12 m-auto font-bold text-xl p-2">
                <button className="bg-red-700 text-white p-2 m-2 rounded-lg" onClick={handleClearCart}>Clear Items</button>
            </div>
            <div className="text-center font-bold text-4xl p-4 m-4">
                {clearCart.length===0 && <h1>Your cart is empty! Add your favourate foods</h1>}
            </div>
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
        </div>
    );
};

export default Cart;