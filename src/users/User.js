
//<div style="color:red;background-color:#faa"></div>

const User = (props) => {
    const ui = {color:'green',backgroundColor:'#afa'}

    return (<div style={{color:'red'}}>
        <h1 style={ui}>{props.name}</h1>
        <p>{props.address}</p>
        <p>{props.zip}</p>
    </div>)
}

export default User;