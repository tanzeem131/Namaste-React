import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log("First child constructor");

        this.state = {count:0};
    }

    componentDidMount(){
        console.log("First child component did mount");
    }
    render(){
        const {name, location}= this.props;
        const {count}= this.state;

        console.log("First child render");

        return(
            <div className="user-cards">
                <h1>Count: {count}</h1>
                <button onClick={()=>{
                    this.setState( {
                        count: this.state.count + 1,
                    }); 
                }}>Count Increase</button>
                <h2>Name:{name}</h2>
                <h2>Location:{location}</h2>
                <h2>Twitter:@Tanzeem_Dev</h2>
            </div>
        )
    }
}

export default UserClass;