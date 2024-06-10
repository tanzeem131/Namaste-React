import React from "react";
import UserContext from "../utils/UserContext";

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
            
        this.setState({
            userInfo: json,
        });
    }

    render(){
        const {name, avatar_url, twitter_username, login} = this.state.userInfo;
        return(
            <div className="flex gap-4 items-center rounded-2xl bg-gray-200">
                <div className="p-1 m-1">
                    <img className="w-28 rounded-full" src={avatar_url}/>
                </div>
                <div className="p-1 m-1">
                    <h2 className="p-1 flex">Name: {name} <div className="bg-emerald-500 mx-2 rounded-2xl font-semibold"><UserContext.Consumer>{({loggedInUser})=> <h1>{loggedInUser}</h1>}</UserContext.Consumer></div>
                    </h2>
                    <h2 className="p-1">Twitter:{twitter_username}</h2>
                    <h2 className="p-1">Github:{login}</h2>
                </div>
            </div>
        )
    }
}

export default UserClass;