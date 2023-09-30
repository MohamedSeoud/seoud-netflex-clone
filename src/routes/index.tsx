import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Signup from "../pages/Signup";

export default function Routes() {

    const index = useRoutes([
        {
            path:'/',
            element:<Layout/>,
            children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/sign-up',
                element:<Signup/>
            }
        ]
        }

    ])
    return index
}

