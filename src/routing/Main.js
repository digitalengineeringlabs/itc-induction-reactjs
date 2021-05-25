import {Component} from 'react'

import {BrowserRouter,Link,Route, Switch, useHistory, useParams,Redirect} from 'react-router-dom'

const Main = () => {
    return (<BrowserRouter>
        <div className="App">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products/cheap'>Products</Link></li>
            <li><Link to='/users'>Users</Link></li>
          </ul>
          <div>
            <Switch>
              <Route exact path='/'><Home/></Route>
              <Route path='/products/:name' component={Products} />
              <Route path='/users' component={Users} />
            </Switch>
          </div>
        </div>
        </BrowserRouter>)
}

const Home = (props) => {
    return <div>Home</div>
  }
  
  const Products = (props) => {
    console.log(props)
    let history = useHistory();
    let {name} = useParams(); //{name:'cheap',type:''}
    const authenticated = true
    return (!authenticated ? <Redirect to="/" /> :
        <div>Products
          <button onClick={()=>history.push('/')}>Go Home</button>
          {name}
        </div>)
  }
  
  class Users extends Component{
    render(){
      console.log(this.props)
      return <div>
        <h4>Users Home</h4>
  
        <ul>
          <li><Link to={{
            pathname: this.props.match.url
          }}>Users Home</Link></li>
          <li><Link to={{
            pathname: `${this.props.match.url}/add`
          }}>Add User</Link></li>
          <li><Link to={{
            pathname: `${this.props.match.url}/settings`
          }}>Settings</Link></li>
        </ul>
  
          <div>
            <Switch>
              <Route exact path={`/`} component={Users}/>
              <Route path={`${this.props.match.path}/add`} component={UserAdd} />
              <Route path={`${this.props.match.path}/settings`} component={UserSettings} />
            </Switch>
          </div>
        </div>
    }
  }
  
  const UserAdd = () => {
    return <div>User Add</div>
  }
  const UserSettings = () => {
    return <div>User Settings</div>
  }

export default Main