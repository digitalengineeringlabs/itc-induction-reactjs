import './Books.css'

const Book = (props) => {
    return (<div className={`book-view ${props.book.price < 100 && 'cheap'}`}>
        <div>
            <h3>{props.book.title}</h3>
            <ul>
                <li>{props.book.category}</li>
                <li>{props.book.pDate}</li>
                <li>{props.book.price}</li>
            </ul>
        </div>
        <button onClick={props.onEditable}>Edit</button>
        <button onClick={props.onRemove}>Remove</button>
    </div>)
}
export default Book;