import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantMenuList = ({data,showItem,setShowIndex})=>{
    const handleClicked=()=>{
        setShowIndex();
    };
    return(
        <div>
            <div className=" w-6/12 bg-gray-50 shadow-lg p-4 m-4 mx-auto">
                <div className="flex justify-between cursor-pointer" onClick={handleClicked}>
                    <span className="font-bold text-lg">{data?.title}({data?.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {showItem && <ItemList items={data?.itemCards}/>}
            </div>
        </div>
    );
};

export default RestaurantMenuList;