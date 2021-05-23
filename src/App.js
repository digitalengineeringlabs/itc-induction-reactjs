import './App.css';
import User from './users/User';
import HomeCls from './books/HomeCls';


function App() {

  const users = [
    {id:1, name:'John 1',address:'Chvago 1',zip:4555},
    {id:2, name:'John 2',address:'Chvago 2',zip:3333}
  ]

  const userComponents = users.map((user)=>{
    return <User key={user.id} 
      name={user.name} 
      address={user.address} zip={user.zip}/>
  })

//new array with transformed
  return (
    <div className="App">
      
      {/* { userComponents } */}
      {/* <Post></Post> */}
      <HomeCls></HomeCls>
      {/* <Users></Users> */}
      {/* <HttpExample></HttpExample> */}
    </div>
  );
}

export default App;
