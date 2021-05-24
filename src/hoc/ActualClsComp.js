import {Component} from 'react'
import withHoc from './withHoc'

class ActualClsComp extends Component {
    render (){
        return <h4>Class Component - {this.props.title}</h4>
    }
}

export default withHoc(ActualClsComp)