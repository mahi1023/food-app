import React from "react";

class Test extends React.Component{
    constructor(props){
        super(props)
        console.log("Child2  constructor")
    }
    componentDidMount(){
        console.log("Child2  componentDidMount")
    }
    render(){
        console.log("Child2  render")
        return(
            <div>
                Test
            </div>
        )
    }
}

export default Test