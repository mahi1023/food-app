import React,{useState} from "react"
const User = (props)=>{
   const [count,setCount]= useState(0);
   const [count2,setCount2] = useState(0)
    return(
        <div className="user-card">
            <h2>{props.name}</h2>
            <h3>Location: Guntur</h3>
            <h4>Contact:</h4>
            <h1>Count:{count}</h1>
        </div>
    )
}

export default User