import React,{Component} from "react";
import Test from "./Test";
class UserClass extends Component{
    constructor(props){
        super(props);
        // console.log(this.props)//print the name
        this.state ={
            userInfo:{
                login:"Dummy",
                public_repos:'nrt',
                avatar_url:""
            }
        }
        console.log('Child constructor'+this.props.name)
    }
    async componentDidMount(){
        console.log('Child componentDidMount');
      const data =  await fetch('https://api.github.com/users/mahi1023');
      const json = await data.json();
      console.log(json);
      this.setState({
        userInfo:json,
      })
      this.timer = setInterval(()=>{
        console.log(" Hi mahi")
      },1000)
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.count !== prevState.count){

        }
        if(this.state.count2 !== prevState.count2){
            
        }
        console.log('user component did update')
    }

    componentWillUnmount(){
        //when we move from that component from other ui 
        
        console.log('user component componentWillUnmount')
    }
    render(){
        const {login,public_repos,avatar_url }= this.state.userInfo;
        console.log('Child render')
        return(
            <>
            
            <div className="user-card">
            <img className="avatar-logo" src={avatar_url}/>
            <h2>Name:{login}</h2>
            <h3>Location:{public_repos}</h3>
            <h4>Contact:</h4>
        </div>
            </>
        )
    }
}
export default UserClass