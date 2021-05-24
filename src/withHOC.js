import { Component } from "react";

const withHOC = (WrappedComponent) => {
    console.log('insise wrapping function');
    // return (props) => {
    //     console.log('inside returning component');
    //     return (<div>
    //         <h3>Wrapping inside component</h3>
    //         <WrappedComponent {...props}/>
    //     </div>)
    // }
    return class extends Component {
        render(){
            return <WrappedComponent {...this.props}/>
        }
    }
}
export default withHOC