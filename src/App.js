import logo from './logo.svg';
import './App.css';
import User from './User';
import Users from './Users';
import Post from './Post';
import Books from './class-components/Books';
import HttpExample from './HttpExample';
import { useState } from 'react';

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
      <Books></Books>
      {/* <Users></Users> */}
      {/* <HttpExample></HttpExample> */}
    </div>
  );
}

export default App;
