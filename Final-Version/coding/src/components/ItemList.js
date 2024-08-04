import { useDispatch } from "react-redux";
import { CLD_ID } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="container mx-auto p-4">
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="flex flex-col md:flex-row p-2 m-2 gap-4 md:gap-8 justify-between border-gray-200 border-b-4"
        >
          <div className="w-full md:w-10/12 text-left">
            <div className="py-2">
              <span className="block md:inline">{item?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>
          <div className="w-full md:w-2/12 py-2 flex md:block items-center justify-center md:justify-end relative">
            <img
              className="h-24 w-full md:w-36 rounded-lg mt-2 md:mt-0"
              src={CLD_ID + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
            />
            <button
              className="text-white hover:text-black hover:bg-white hover:border-[0.5px] hover:border-black bg-amber-500 p-2 mx-auto md:mx-0 my-2 md:my-4 rounded-lg font-bold text-lg absolute bottom-0 md:bottom-auto md:top-1/2 lg:top-auto lg:bottom-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:translate-y-full"
              onClick={() => handleAddItem(item)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
