import { useContext } from "react"
import { CurrUserContext } from "./App"
import withHOC from "./withHOC"

const SampleFnComp = (props) => {
    const value = useContext(CurrUserContext)
    return (<><h1>Function Component - {value.name}</h1>
                <p>Message:{props.message}</p>
            </>)
}

export default withHOC(SampleFnComp)