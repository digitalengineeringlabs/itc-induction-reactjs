import React, { useEffect, useState } from "react";

const Add = (props) => {

    const [book,setBook] = useState({title:'',category:'',pDate:'',price:0});
    const ref = React.createRef();

    useEffect(()=>{
        ref.current.focus()
    },[])

    return (<div style={{border:'2px dashed #999',padding:'20px'}}>
        <ul className='form'>
        <li>
            <label htmlFor="title">Title</label>
            <input id="title" ref={ref} type="text" value={book.title} onChange={(e)=>setBook({...book,title:e.target.value})}></input>
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