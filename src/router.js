import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Root from "./components/root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Aboutwrong from "./components/Error-Elements/Aboutwrong";
import Contactwrong from "./components/Error-Elements/Contactwrong";
import Experiencewrong from "./components/Error-Elements/Experiencewrong";
import Projectwrong from "./components/Error-Elements/Projectwrong";


const router = createBrowserRouter([
    {
        element: <Root/>,
        children: [
            {
                
                path: '/',
                element: <About/>,
                errorElement: <Aboutwrong/>
            },
            {
                path: 'experience',
                element: <Experience/>,
                errorElement: <Experiencewrong/>
            },
            {
                path: 'projects',
                element: <Projects/>,
                errorElement: <Projectwrong/>
            },
            {
                path: 'contact-me',
                element: <Contact/>,
                errorElement: <Contactwrong/>
            }
        ]
    }
])

export default function Router(){
    return(
        <>
        <RouterProvider router={router}/>
        </>
    )
}