import {useEffect, useState} from 'react'
import axios from 'axios'
import Book from './Book'

const Books = () => {

    const [books,setBooks] = useState([])
    const [title,setTitle] = useState('')
    const [refresh,setRefresh] = useState(true)

    const fetchBooks = () => {
        axios.get('http://localhost:5000/books').then((res)=>{
            setBooks(res.data)
        })
    }

    useEffect(fetchBooks,[])
    useEffect(fetchBooks,[refresh])
    //<button onClick={addBookHandler}>Add</button>
    const addBookHandler = () => {
        // const booksCopy = [...books, {id:Math.round(Math.random()*100), title:title}];
        // setBooks(booksCopy);
        axios.post('http://localhost:5000/books', {title}).then((res)=>{
            setRefresh(!refresh)
        })
    }
    // const [form,setForm] = useState({comments:'',category:''});

    //[{id:33,title:'Test'},{id:66,title:'Some'},{id:99,title:'Hello'}]
    const removeBookHandler = (id) => {
        const booksCopy = [...books];
        const filtered = booksCopy.filter(book => book.id !== id)
        setBooks(filtered);
    }

    const editBookHandler = (id, title) => {
        const booksCopy = [...books];
        const altered = booksCopy.map((b)=>{
            return id === b.id ? {...b,title:title} : b;
        }) 
        setBooks(altered);
    }

    return (<div style={{border:'3px dashed #999',padding:'20px'}}>

        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
{/*         
        <p><textarea onChange={(e)=>setForm({...form, comments:e.target.value})}>{form.comments}</textarea></p>
        <p><select name="category" onChange={(e)=>setForm({...form,category:e.target.value})}>
            <option>Novel</option>
            <option>Comic</option>
            <option>Fiction</option>
            </select>
        </p> */}
       
        <button onClick={addBookHandler}>Add</button>
        {
            books.map((book)=>{
                return <Book key={book.id} book={book}
                    onRemove={()=>{removeBookHandler(book.id)}}
                    onEdit={editBookHandler}
                    ></Book>
            })
        }
    </div>);
}

export default Books;

