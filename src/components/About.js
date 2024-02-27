import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class AboutComponent  extends Component{

    constructor(props){
        super(props)

    }

    render(){

        return (   
        <div className="about">
        <h1>About Us</h1>
        <div>
            LoggedInUser:
        <UserContext.Consumer>
        {({loggedInUser})=> <h1 className="text-xl font-bold">{loggedInUser}</h1>
        }
       </UserContext.Consumer>
        </div>
      
        <h1> Namaste React ÄÜÖ </h1>       
         <User/> 
         <UserClass name={"komal"} location={"schramberg"}/>
</div>
)
    }

    componentDidMount(){  
       this.timer  = setInterval(() => {
            console.log("hey namaste");
        }, 1000);

       
    }


componentWillUnmount(){
 clearInterval(this.timer)
}
}

// const AboutComponent = () =>{
//     return (        <div className="about">
//             <h1>About Us</h1>
//              <h1> Namaste React ÄÜÖ </h1>       

//              <User/> 
//              <UserClass name={"komal from class"} location={"schramberg"}/>
// </div>
//     )
// }

export default AboutComponent;