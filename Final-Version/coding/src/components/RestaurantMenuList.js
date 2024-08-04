import ItemList from "./ItemList";

const RestaurantMenuList = ({ data, showItem, setShowIndex, dummy }) => {
  const handleClicked = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="lg:w-6/12 md:w-6/12 sm:w-7/12 vs:w-8/12 bg-gray-50 shadow-lg lg:p-4 md:p-4 sm:p-2 vs:p-1 lg:my-4 md:my-4 sm:my-2 vs:my-1 mx-auto">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClicked}
        >
          <span className="font-bold lg:text-lg md:text-lg sm:text-sm vs:text-[12px]">
            {data?.title}({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemList items={data?.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantMenuList;
