import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name: "name",
                location: "location",
            },
        };
    }

   async componentDidMount(){
        const data = await fetch("https://api.github.com/users/tanzeem131");

        const json = await data.json();

        
        // this.timer = setInterval(()=>{
        //         console.log("Namaste react!");
        // },1000);
            
        this.setState({
            userInfo: json,
        });
        // console.log(json);
    }

    componentDidUpdate(){
        console.log("component did update");

    }

    componentWillUnmount(){
        // clearInterval(this.timer);
        console.log("component Will Unmount");
    }

    render(){
        const {name, avatar_url, twitter_username, login} = this.state.userInfo;
        return(
            <div className="user-cards">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h2>Twitter:{twitter_username}</h2>
                <h2>Github:{login}</h2>
            </div>
        )
    }
}

export default UserClass;