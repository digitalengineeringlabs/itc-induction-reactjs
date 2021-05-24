import React,{ useEffect, useState } from "react";

const Add = (props) => {

    const [book,setBook] = useState({title:'',category:'',pDate:'',price:0});
    const titleInputRef = React.createRef();

    useEffect(()=>{
        titleInputRef.current.focus()
    },[])
    
    return (<div>
        <ul className='form'>
        <li>
            <label htmlFor="title">Title</label>
            <input id="title" type="text" ref={titleInputRef} value={book.title} onChange={(e)=>setBook({...book,title:e.target.value})}></input>
        </li>
        <li>
            <label htmlFor="category">Category</label>
            <select id="category" value={book.category} 
                onChange={(e)=>setBook({...book,category:e.target.value})}>
                    <option>Select</option>
                    <option value="Novel">Novel</option>
                    <option value="Comic">Comic</option>
                </select>
        </li>        
        <li>
            <label htmlFor="pdate">Published</label>
            <input id="pdate" type="date" value={book.pDate} onChange={(e)=>setBook({...book,pDate:e.target.value})}></input>
        </li>
        <li>
            <label htmlFor="price">Price</label>
            <input id="price" type="number" min="1.00" step="0.25" max="2500" value={book.price} onChange={(e)=>setBook({...book,price:e.target.value})}></input>
        </li>
         </ul>
       
       <button onClick={()=>props.onAdd(book)}>Add</button>
    </div>)
}

export default Add;