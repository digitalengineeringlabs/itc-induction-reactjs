import { Component } from "react";
import { CurrUserContext } from "./App";
import withHOC from "./withHOC";

class SampleClsComp extends Component {
    render(){
        return (<CurrUserContext.Consumer>
            {
                (value)=>{
                    return (<div>
                        <h1>Class Component - {value.name}</h1>
                        <p>Message:{this.props.message}</p>
                    </div>)
                }
            }
            </CurrUserContext.Consumer>
            )
    }
} 

export default withHOC(SampleClsComp)