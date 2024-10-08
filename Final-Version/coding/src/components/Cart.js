import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { MdDeleteForever, MdDeliveryDining } from "react-icons/md";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const calculateTotalSum = () => {
    return cartItems
      .reduce((total, item) => {
        const price = item?.card?.info?.price
          ? item?.card?.info?.price / 100
          : item?.card?.info?.defaultPrice / 100;
        return total + (price || 0);
      }, 0)
      .toFixed(2);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="flex justify-center font-bold text-3xl sm:text-8xl p-4 m-4">
        <MdDeliveryDining />
      </div>
      <div className="flex lg:justify-end md:justify-end sm:justify-center vs:justify-center w-6/12 m-auto font-bold text-xl p-2">
        <button
          className="bg-red-700 text-white p-2 m-2 rounded-lg"
          onClick={handleClearCart}
        >
          <MdDeleteForever />
        </button>
      </div>
      {cartItems.length === 0 && (
        <div className="text-center lg:justify-end md:justify-end sm:justify-center vs:justify-center font-bold lg:text-4xl md:text-4xl sm:text-2xl vs:text-xl p-4 mx-4 mb-40">
          <h1>Your cart is empty! Add your favourite foods</h1>
        </div>
      )}
      <div className="w-6/12 mx-auto ">
        <ItemList items={cartItems} />
      </div>
      {cartItems.length !== 0 && (
        <div className="w-6/12 mb-72 mx-auto p-2 text-center font-bold text-xl">
          <h2>Total: ₹{calculateTotalSum()}</h2>
        </div>
      )}
    </>
  );
};

export default Cart;
