import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div className="text-center font-bold text-4xl p-4 m-4">Cart</div>
      <div className="flex lg:justify-end md:justify-end sm:justify-center vs:justify-center w-6/12 m-auto font-bold text-xl p-2">
        <button
          className="bg-red-700 text-white p-2 m-2 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Items
        </button>
      </div>
      <div className="text-center lg:justify-end md:justify-end sm:justify-center vs:justify-center font-bold lg:text-4xl md:text-4xl sm:text-2xl vs:text-xl p-4 m-4">
        {cartItems.length === 0 && (
          <h1>Your cart is empty! Add your favourate foods</h1>
        )}
      </div>
      <div className="w-6/12 mx-auto mb-72">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
