import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name: "name",
                location: "location",
            }
        };
    }

   async componentDidMount(){
        const data = await fetch("https://api.github.com/users/tanzeem131");

        const json = data.json();

        console.log(json);

        // this.timer = setInterval(()=>{
        //     console.log("Namaste react!");
        // },1000);

        this.setState({
            userInfo: json,
        });
    }

    // componentDidUpdate(){
    //     console.log("component did update");

    // }

    // componentWillUnmount(){
    //     // clearInterval(this.timer);
    //     console.log("component Will Unmount");
    // }

    render(){
        const [name,location,id] = this.setState.userInfo;
        return(
            <div className="user-cards">
                <h2>Name: {name}</h2>
                <h2>Location:{location}</h2>
                <h2>Twitter:@Tanzeem_Dev</h2>
                <h2>Github:{id}</h2>
            </div>
        )
    }
}

export default UserClass;