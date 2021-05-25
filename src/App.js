import './App.css';
import React from 'react';
import Samples from './services/Samples';
// import Main from './routing/Main';
// import Main from './services/Main';

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
    
    <div className="App">
      {/* <Main></Main> */}
      <Samples></Samples>
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
  );
}

export default App;
