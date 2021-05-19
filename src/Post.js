import React,{useState} from 'react';

//React Hook (16.8)

const Post = () => {

    const [name, setName] = useState('')
    const [user, setUser] = useState({name:'',age:0})

    const [toggle, setToggle] = useState(true)
    const [ui, setUi] = useState({backgroundColor: '#ddd'})

    const onHeadClick = (name) => {
        console.log('hi '+name)
    } 
   
    return (
        <div style={ui}>
            {name}
            <button onClick={()=>{
                setToggle(!toggle);
                setUi({backgroundColor: toggle ? '#afa' : '#faa'});
                }}>Toggle</button>
            <h1 onClick={(e) => { onHeadClick(e.target.innerHTML) }}>Advertisement</h1> 
            <h1 onClick={(e) => { onHeadClick(e.target.innerHTML) }}>Hoarding</h1> 
            <h1 onClick={(e) => { onHeadClick(e.target.innerHTML) }}>Banner</h1>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            <br/><br/><br/>
            <input type="text" value={user.name} onChange={(e)=>{setUser({...user, name:e.target.value})}}></input><br/>
            <input type="text" value={user.age} onChange={(e)=>{setUser({...user, age:e.target.value})}}></input><br/>
                {user.name} | {user.age}

        </div>
        ); 
}

export default Post;