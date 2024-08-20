import React,{Component} from "react";
class TwoWaynm extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue : " "
        }
    }
    handleInput=(event)=>{
        this.setState({
            inputValue:event.target.value
        })
    }
    render(){
        return(
            <div>
            <input type="text" value={this.inputValue} onChange={this.handleInput} />
            <p>Hello {this.state.inputValue}</p>
            </div>
        )
    }
}
export default TwoWaynm;