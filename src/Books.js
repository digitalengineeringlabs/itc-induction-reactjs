import {useState} from 'react'
import Book from './Book'

const Books = () => {

    const [books,setBooks] = useState([])
    const [title,setTitle] = useState('')

    //[{id:33,title:'Test'},{id:66,title:'Some'},{id:99,title:'Hello'}]
    const removeBookHandler = (id) => {
        console.log('to be removing book '+id);
        const booksCopy = [...books];
        const filtered = booksCopy.filter(book => book.id !== id)
        setBooks(filtered);
    }


    return (<div style={{border:'3px dashed #999',padding:'20px'}}>
        
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
        <button onClick={()=>{
            const booksCopy = [...books, {id:Math.round(Math.random()*100), title:title}];
            setBooks(booksCopy);
        }}>Add</button>

        {
            books.map((book)=>{
                return <Book key={book.id} title={book.title} 
                    onRemove={()=>{removeBookHandler(book.id)}} ></Book>
            })
        }
    </div>);
}

export default Books;