import React from "react";
class Sample extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "sure"
        }
    }
    changeName =()=>{
        this.setState (
            {
                name :"Surendhiran"
            }
        )
    }
    render() {
        return (
            <div style={{alignItems:"center"}}>
                <h1 style={{color: "red"}}>My name is : {this.state.name} </h1>
                <button onClick={this.changeName} style={{justifyContent:"center"}}>
                    Click
                </button>
            </div>
        )
    }
}

export default Sample;