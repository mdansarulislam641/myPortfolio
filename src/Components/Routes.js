import { createBrowserRouter } from "react-router-dom";
import Details from "./Details";
import Home from "./Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/details/:id',
        element:<Details></Details>,
    }
])
export default router ;