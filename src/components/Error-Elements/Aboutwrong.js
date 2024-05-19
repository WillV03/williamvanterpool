import { useRouteError } from "react-router-dom";

function Aboutwrong(){
    let error = useRouteError();
    console.error(error);
    return (
        <h1>how ABOUT a fail</h1>
    )
}

export default Aboutwrong