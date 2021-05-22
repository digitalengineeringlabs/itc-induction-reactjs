import {Component} from 'react'
import UserInfo from './UserInfo'

export default class Users extends Component {

    //overwrite
    state = {
        users: ['John','Peter']
    }

    userSelectHandler() {
        console.log('user select called')
    }
    
    // //overriding a method
    // componentDidMount(){ //lifecycle methods

    // }

    // componentDidUpdate(prevProps, prevState){

    // }

    // componentWillUnmount() {
        
    // }

    render() {
        return (<div>
            {
                this.state.users.map(b => <UserInfo name={b} 
                    onSelectItem={this.userSelectHandler}></UserInfo>)
            }
            </div>)
    }

}

// function Users() {
//     return <div></div>
// }