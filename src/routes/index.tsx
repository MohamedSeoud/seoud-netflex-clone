import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";

export default function Routes() {

    const index = useRoutes([
        {
            path:'/',
            element:<Layout/>,
            children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
        }

    ])
    return index
}

