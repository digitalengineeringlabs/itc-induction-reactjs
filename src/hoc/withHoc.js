const withHoc = (WrappedComponent) => {
    console.log('do something outside..')
    return (props)=> {
        console.log('do something inside..')
        return <div><h2>Wrapper</h2><WrappedComponent {...props}/></div>
    }
}

export default withHoc