import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "name",
        location: "location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/tanzeem131");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, avatar_url, twitter_username, login } = this.state.userInfo;
    return (
      <div className="flex w-fit gap-4 items-center rounded-2xl bg-gray-200">
        <div className="p-1 m-1">
          <img className="w-28 rounded-full" src={avatar_url} />
        </div>
        <div className="p-1 m-1">
          <h2 className="p-1 flex">Name: {name}</h2>
          <h2 className="p-1">Github:{login}</h2>
          <h2 className="p-1">Twitter:{twitter_username}</h2>
        </div>
      </div>
    );
  }
}

export default UserClass;
