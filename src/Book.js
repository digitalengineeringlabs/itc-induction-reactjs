const Book = (props) => {
    return (<div style={{border:'3px dashed #f99',margin:'10px',padding:'10px'}}>
        <h3>{props.title}</h3>
        <button onClick={props.onRemove}>Remove</button>
    </div>)
}
export default Book;