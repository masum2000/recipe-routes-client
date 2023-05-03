import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Recipe from "../pages/Section/Recipe/Recipe";
import ChefSection from "../pages/Section/ChefSection/ChefSection";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blog from "../pages/Section/Blog/Blog";
import ErrorPage from "../pages/Section/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
    },
    {
        path: '/chefs/:_id/recipes',
        element: <Recipe></Recipe>,
        loader: ({params}) =>fetch(`http://localhost:5000/chefs/${params._id}`)
    },
    {
        path: "/chefs/:id",
        element: <ChefSection></ChefSection>,
    },
    {
        path: 'blog',
        element: <Blog></Blog>
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }






    // {
    //    path: '/',
    //    element: <LoginLayout></LoginLayout>,
    //    children:[
    //     {
    //        path: '/',
    //        element: <Navigate to="/chefs/0"></Navigate>
    //     },
    //     {
    //         path:'/login',
    //         element: <Login></Login>
    //     },
    //     {
    //         path: 'register',
    //         element: <Register></Register>
    //     }
    //    ]
    // },


])

export default router;