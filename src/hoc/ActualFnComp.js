import withHoc from "./withHoc"

const ActualFnComp = (props) => {
    return <h4>Function Component - {props.title}</h4>
}
export default withHoc(ActualFnComp)