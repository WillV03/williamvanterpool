import { useRouteError } from "react-router-dom";

function Projectwrong(){
    let error = useRouteError();
    console.error(error);
    return (
        <h1>fixing this is gonna be a PROJECT</h1>
    )
}

export default Projectwrong;