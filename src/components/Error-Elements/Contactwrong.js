import { useRouteError } from "react-router-dom";

function Contactwrong(){
    let error = useRouteError();
    console.error(error);
    return (
        <h1>better CONTACT support</h1>
    )
}

export default Contactwrong;