import { useEffect, useState } from "react"
import {messageService,subscriber} from './messageService'

const Main = () => {
    return (<>
        <h3>Services Example</h3>
        <ProducerFn></ProducerFn>
        <ConsumerFn></ConsumerFn>
        {/* <ConsumerFn></ConsumerFn> */}
    </>)
}

const ProducerFn = () => {
    return <div>Producer Fn
        <p>
        <input type='text' onChange={(e)=>{
            messageService.send(e.target.value)
        }}></input>
        </p>
    </div>
}

const ConsumerFn = () => {
    const[msg,setMsg] = useState('')
    useEffect(()=>{
        subscriber.subscribe({next: (data)=>{
            setMsg(data)
        }})
    },[])
    return <div>Consumer Fn
        <p>{msg}</p>
    </div>
}

export default Main