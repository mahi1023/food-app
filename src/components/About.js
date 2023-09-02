


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
        <div className="flex flex-row justify-center items-center">
        <div className=" flex flex-col items-center w-[240px]  ">
                <h1 className="text-md font-bold">About This Accont</h1>
                <UserClass name="Maheswari Class" location="Guntur class"/>            
        </div>
        </div>            
    )
    }
}
export default About