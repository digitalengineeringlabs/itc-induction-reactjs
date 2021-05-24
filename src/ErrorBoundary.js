import { Component } from "react";

export default class ErrorBoundary extends Component {

    state = {
        error: false,
        message: ''
    }

    //lifecycle method
    componentDidCatch(error,errorInfo){
        if(error) {
            this.setState({error:true})
        }
    }

    render(){
        return (this.state.error ? <div>Sorry!!</div> : this.props.children)
    }
}