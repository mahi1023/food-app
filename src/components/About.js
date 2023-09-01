


import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import Test from "./Test";
class About extends Component{
    
    
    constructor(props){
        super(props);
        console.log("Parent constructor")
    }
    componentDidMount(){
        console.log('Parent componentDidMount');

    }
    
    render(){
        console.log('Parent render')

    return(
        <div>
                <h1>About</h1>
                <h2>This is namestey raect web seris</h2>
                <UserClass name="Maheswari Class" location="Guntur class"/>            
        </div>



                
               
    )
    }
}
export default About