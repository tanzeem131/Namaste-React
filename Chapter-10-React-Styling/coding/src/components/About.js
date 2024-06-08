import React from "react";
import UserClass from "./UserClass";


class About extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="h-[555px] p-4 m-4">
                <h1 className="text-4xl font-bold">About us</h1>
                <h2 className="text-xl font-semibold my-4">Developer</h2>
                <UserClass />
            </div>
        );
    }
}
export default About;