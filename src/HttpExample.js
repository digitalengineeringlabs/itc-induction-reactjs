import { useEffect, useState } from "react";
import axios from 'axios'

const HttpExample = (props) => {
    //side effects
    const [counter,setCounter] = useState(1)
    const [books,setBooks] = useState([])

    //REST API (http)
    
    useEffect(()=>{
        console.log('called every render') 
    })    
    
    useEffect(()=>{
        console.log('called only on first render') 
        // fetch('http://localhost:5000/books').then(response => response.json())
        // .then(data => setBooks(data))

        axios.get('http://localhost:5000/books').then((res)=>{
            setBooks(res.data)
        })

    },[])

    useEffect(()=>{
        console.log('called only on state change of varible in second argument array') 
    },[counter])

    useEffect(()=>{
        console.log('called every render')
        return () => {
            console.log('called on unmounting, clean any resources')
        }
    })

    return <div>{counter}
     <button onClick={()=> {
         const incr = counter + 1
         setCounter(incr)
     }}>change counter</button>
     {
         books.map(b => <p key={b._id}>{b.title}</p>)
     }
    </div>
}

export default HttpExample;