import React,{Component} from "react";
import College from './College';
class Department extends Component{
    render(){
        return(
            <div>
                <h1>CSE Department</h1>
                <College />
            </div>
        )
    }
}
export default Department;