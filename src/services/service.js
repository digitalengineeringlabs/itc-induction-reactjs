import {BehaviorSubject} from 'rxjs'

const subject = new BehaviorSubject(0);

// subject.subscribe({next:(data)=>{
//     console.log('received '+data)
// },error:(error)=>{
//     console.log('failure '+error)
// }})

// subject.next('some data')

export default subject