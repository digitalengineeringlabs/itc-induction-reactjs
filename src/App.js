import React, { useState } from 'react'
import './App.css';
import User from './users/User';
import HomeCls from './books/HomeCls';
import ActualFnComp from './hoc/ActualFnComp';
import ActualClsComp from './hoc/ActualClsComp';
import withHoc from './hoc/withHoc';

export const ThemeContext = React.createContext('light');

function App() {

  const [theme,setTheme] = useState('dark')

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
      <ThemeContext.Provider value="dark">
      {/* { userComponents } */}
      {/* <Post></Post> */}
      {/* <HomeCls></HomeCls> */}
      {/* <ActualComponent></ActualComponent> */}
      <ActualFnComp title={'John'}></ActualFnComp>
      <ActualClsComp title={'Peter'}></ActualClsComp>
      {/* <Users></Users> */}
      {/* <HttpExample></HttpExample> */}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
