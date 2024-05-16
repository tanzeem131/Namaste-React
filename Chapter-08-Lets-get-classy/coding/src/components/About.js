import React from "react";
import { Component } from "react";
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
                <h2>Developers </h2>
                <UserClass name ={"First class"} location ={"Dhanbad"}/>
                <UserClass name ={"Second class"} location ={"Delhi"}/>
                <UserClass name ={"Third class"} location ={"Goa"}/>
            </div>
        );
    }
}
export default About;