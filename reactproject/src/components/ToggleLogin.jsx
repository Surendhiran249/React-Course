import React,{Component} from "react";
class ConditionalRendering extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn : false
        }
    }
    ToggleLogin=()=>{
        this.setState(prevState=>(
        {
            isLoggedIn : !prevState.isLoggedIn
        }))
    }
    render(){
        return(
            <div>
                {this.state.isLoggedIn ? "Welcome Back!!" : "Please Login"}<br/>
                <button onClick={this.ToggleLogin}>{this.state.isLoggedIn ? "Logout" : "Login"}</button>
            </div>
        )
    }
}
export default ConditionalRendering;