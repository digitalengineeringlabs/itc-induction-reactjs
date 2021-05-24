import './App.css';
import React, { Component, useState } from 'react';
import {BrowserRouter,Link,Route, Switch, useHistory, useParams,Redirect} from 'react-router-dom'

export const CurrUserContext = React.createContext({name:'John'})

function App() {

  // const [name,setName] = useState('')

  // const users = [
  //   {id:1, name:'John 1',address:'Chvago 1',zip:4555},
  //   {id:2, name:'John 2',address:'Chvago 2',zip:3333}
  // ]

  // const userComponents = users.map((user)=>{
  //   return <User key={user.id} 
  //     name={user.name} 
  //     address={user.address} zip={user.zip}/>
  // })

//new array with transformed
  return (
    <BrowserRouter>
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
      {/* <input type='text' value={name} 
      onChange={(e)=>setName(e.target.value)}></input> */}

      {/* { userComponents } */}
      {/* <Post></Post> */}
      {/* <CurrUserContext.Provider value={{name}}>
        <ErrorBoundary>
          <SampleFnComp message="Hello"></SampleFnComp>
        </ErrorBoundary>
        <SampleClsComp message="Hi"></SampleClsComp>
      </CurrUserContext.Provider> */}
      {/* <HomeCls></HomeCls> */}
      {/* <Users></Users> */}
      {/* <HttpExample></HttpExample> */}
    </div>
    </BrowserRouter>
  );
}

const Home = (props) => {
  return <div>Home</div>
}

const Products = (props) => {
  console.log(props)
  let history = useHistory();
  let {name} = useParams();
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

export default App;
