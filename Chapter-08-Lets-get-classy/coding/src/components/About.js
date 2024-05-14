import UserClass from "./UserClass";

const About = ()=> {
    return (
        <div className="about">
            <h1>About us</h1>
            <h2>Developers </h2>
            <UserClass name ={"First class"} location ={"Dhanbad"}/>
            <UserClass name ={"Second class"} location ={"Delhi"}/>
            <UserClass name ={"Third class"} location ={"Goa"}/>
        </div>
    );
};

export default About;