import { useState } from "react";

const User = (props) => {
    const [count1 ,setCount] = useState(0);
    const [count2,setCount2] = useState(1);
    return (
        <div className="user-cards">
            <h1>Count: {count1}</h1>
            <h1>Count: {count2}</h1>
            <h2>Name:{props.name}</h2>
            <h2>Location:Dhanbad</h2>
            <h2>Twitter:@Tanzeem_Dev</h2>
        </div>
    );
};

export default User;