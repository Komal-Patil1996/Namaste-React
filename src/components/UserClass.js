import React from "react";
import { Component } from "react"; // we can also destructure like this and then extends directly the Component

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
          userInfo: {
            name: "dummy",
            location: "dummy",
          }
          }

    }
    
    render(){
    
        const {name,location,avatar_url} = this.state.userInfo;


        return( <div className="user-card" >
           
        <h3>Name: {name}</h3>
        <h4>Location: {location}  </h4>
        <h4>Contact: patilkomal013@gmail.com</h4>
        <img src={avatar_url}/>
      </div>);
    }

  async  componentDidMount(){
  

        const data = await fetch("https://api.github.com/users/Komal-Patil1996");

        const json = await data.json();

        this.setState({
            userInfo : json,
        });

    }

    componentDidUpdate(){
    }

    componentWillUnmount(){
    }
}

export default UserClass; 