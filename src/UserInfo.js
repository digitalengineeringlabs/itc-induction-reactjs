import {Component, useState} from 'react'

export default class UserInfo extends Component {

    // constructor(props){
    //     super(props)
    // }

    render() {
        return <h1 onClick={()=>this.props.onSelectItem()}>{this.props.name}</h1>
    }
}

