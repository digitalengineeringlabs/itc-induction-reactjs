import {Component} from 'react'
import axios from 'axios'
import Info from './Info' 
import Add from './Add'
import Edit from './Edit'
import {ThemeContext} from '../App'

export default class HomeCls extends Component {
    
    state = {
        books: [],
        filter: {
            category: ''
        },
        refresh: false
    }

    fetchBooks = () => {
        const url = 'http://localhost:5000/books' + 
                (this.state.filter.category !== '' ? '?category='+ this.state.filter.category : '') 
        
        axios.get(url).then((res)=>{
            const books = res.data.map(b => {
                return {...b, editable:false}
            })
            this.setState({books});
        })
    }

    componentDidMount(){
        this.fetchBooks()
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.refresh !== this.state.refresh){
            this.fetchBooks()
        }
    }

    addBookHandler = (book) => {
        axios.post('http://localhost:5000/books', book).then((res)=>{
            this.setState({refresh:!this.state.refresh});
        })
    }

    removeBookHandler = (id,title) => {
        const remove = window.confirm(`Are you sure to remove ? ${title}`)
        remove && axios.delete(`http://localhost:5000/books/${id}`).then((res)=>{
            this.setState({refresh:!this.state.refresh});
        })
    }

    editBookHandler = (book) => {
        axios.put(`http://localhost:5000/books/${book._id}`, book).then((res)=>{
            this.setState({refresh:!this.state.refresh});
        })
    }

    filterBookHandler = (book) => {
        this.setState({filter:book, refresh:!this.state.refresh})
    }

    editShowHandler = (id, show) => {
        const booksCopy = [...this.state.books];
        const altered = booksCopy.map((b)=>{
            return id === b._id ? {...b,editable:show} : b;
        }) 
        this.setState({books:altered});
    }
    highlight = false
    
    render () {
        const styleProps = {
            border:'3px dashed #999',
            padding:'20px',
            textAlign:'left',
            backgroundColor: this.highlight ? '#ddd' : '#fff'
        }
        
        return (<ThemeContext.Consumer>
            {value => (<div style={styleProps}>
            {value}
            <Add onAdd={this.addBookHandler}></Add>
            <div>
            <select id="category" value={this.state.filter.category} 
                onChange={(e)=>this.filterBookHandler({category:e.target.value})}>
                    <option value="">Show All</option>
                    <option value="Novel">Novel</option>
                    <option value="Comic">Comic</option>
                </select>
            </div>
        {
            this.state.books.map((book)=>{
                return book.editable ? 
                    (<Edit key={book._id} book={book} onModify={this.editBookHandler} 
                        onCancel={()=>this.editShowHandler(book._id, false)}></Edit>) : 
                    (<Info key={book._id} book={book}
                    onRemove={()=>{this.removeBookHandler(book._id,book.title)}}
                    onEditable={()=>this.editShowHandler(book._id, true)}
                    >Book</Info>)
            })
        }
    </div>)}</ThemeContext.Consumer>);
    }
}
