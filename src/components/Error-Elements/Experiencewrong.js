import { useRouteError } from "react-router-dom";


function Experiencewrong(){
    let error = useRouteError();
    console.error(error);
    return (
        <h1>what a shitty experience</h1>
    )
}

export default Experiencewrong