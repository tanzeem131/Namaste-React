import { CLD_ID } from "../utils/constants";

const ItemList =({items})=>{
    return(
        <div>{items.map((item)=>(
            <div key={item?.card?.info?.id} className="flex p-2 m-2 gap-32 justify-between border-gray-200 border-b-4 py-5">
                <div className="w-10/12 text-left">
                    <div className="py-2">
                        <span>{item?.card?.info?.name}</span>
                        <span> - ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}
                        </span>                        
                    </div>
                    <p className="text-sm">{item?.card?.info?.description}</p>
                </div>
                <div className="w-2/12 py-2">
                    <div className="absolute">
                        <button className="text-white hover:text-black hover:bg-white hover:border-[0.5px] hover:border-black bg-black p-2 mx-9 my-16 rounded-lg font-bold text-lg">ADD</button>
                    </div>
                    <img className="h-24 w-36 rounded-lg" src={CLD_ID + item?.card?.info?.imageId}/>
                </div>
            </div>
        ))}</div>
    );
};

export default ItemList;