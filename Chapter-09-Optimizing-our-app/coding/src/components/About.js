import React from "react";
import UserClass from "./UserClass";


class About extends React.Component{
    constructor(props){
        super(props);

        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent component did mount");
    }

    render(){
        console.log("Parent render");

        return (
            <div className="about">
                <h1>About us</h1>
                <h2>Developer</h2>
                <UserClass name ={"First class"} location ={"Dhanbad"}/>
            </div>
        );
    }
}
export default About;