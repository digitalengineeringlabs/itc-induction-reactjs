import {useState} from 'react'

const Book = (props) => {

    const [form,setForm] = useState({title:props.book.title,editable:false})

    return (<div style={{border:'3px dashed #f99',margin:'10px',padding:'10px',backgroundColor:'#d4d'}}>
        {props.children}
        <h3>{form.title}</h3>
        {
           form.editable && <input type="text" value={form.title}
            onChange={(e)=>setForm({...form,title:e.target.value})} 
            onBlur={()=>{
                props.onEdit(props.book.id,form.title);
                setForm({...form,editable:false});
            }}></input>
        }
        {
        !form.editable && <button onClick={()=>{
                setForm({...form,editable:true});
            }}>Edit</button>
        }
        <button onClick={props.onRemove}>Remove</button>

    </div>)
}
export default Book;