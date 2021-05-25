import { useEffect, useState } from 'react'
import subject from './service'

const Samples = () => {
    return <div>
        <ProducerFn></ProducerFn>
        <ConsumerFn ins="1"></ConsumerFn>
        <ConsumerFn ins="2"></ConsumerFn>
        <ConsumerFn ins="3"></ConsumerFn>
    </div>
}

const ProducerFn = () => {
    return <div>Producer Fn
        <input type='text' onChange={(e)=>subject.next(e.target.value)}></input>
        <button onClick={()=>subject.next('some data')}> Send Message </button>
    </div>
}
const ConsumerFn = (props) => {
    const [data,setData] = useState('')
        useEffect(()=>{
            subject.subscribe({next:(data)=>{
                console.log('received '+data)
                setData(data)
            },error:(error)=>{
                console.log('failure '+error)
                setData(error)
            }})
        },[])
    return <div>Consumer Fn
        <p>Data {props.ins}: {data}        </p>
    </div>
}

export default Samples