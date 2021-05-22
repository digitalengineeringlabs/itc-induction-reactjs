import {Component} from 'react'
import axios from 'axios'
import Book from './Book' 

export default class Books extends Component {

    state = {
        books: [],
        title: '',
        refresh: false
    }

    fetchBooks = () => {
        axios.get('http://localhost:5000/books').then((res)=>{
            console.log(res.data)
            this.setState({books:res.data});
        })
    }

    //life cycle hook - mounting
    componentDidMount(){
        this.fetchBooks()
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.refresh !== this.state.refresh){
            this.fetchBooks()
        }
    }

    //<button onClick={addBookHandler}>Add</button>
    addBookHandler = () => {
        // const booksCopy = [...this.state.books, {id:Math.round(Math.random()*100), title:this.state.title}];
        // this.setState({books:booksCopy});
        axios.post('http://localhost:5000/books', {title:this.state.title}).then((res)=>{
            this.setState({refresh:!this.state.refresh});
        })
    }

    //[{id:33,title:'Test'},{id:66,title:'Some'},{id:99,title:'Hello'}]
    removeBookHandler = (id) => {
        const booksCopy = [...this.state.books];
        const filtered = booksCopy.filter(book => book.id !== id)
        this.setState({books:filtered});
    }

    editBookHandler = (id, title) => {
        const booksCopy = [...this.state.books];
        const altered = booksCopy.map((b)=>{
            return id === b.id ? {...b,title:title} : b;
        }) 
        this.setState({books:altered});
    }

    render () {
        return (<div style={{border:'3px dashed #999',padding:'20px'}}>
        <input type="text" value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})}></input>
       
        <button onClick={this.addBookHandler}>Add</button>
        {
            this.state.books.map((book)=>{
                return <Book key={book.id} book={book}
                    onRemove={()=>{this.removeBookHandler(book.id)}}
                    onEdit={this.editBookHandler}
                    >Book</Book>
            })
        }
    </div>);
    }
}

