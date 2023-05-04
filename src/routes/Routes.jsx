import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Recipe from "../pages/Section/Recipe/Recipe";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blog from "../pages/Section/Blog/Blog";
import ErrorPage from "../pages/Section/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ChefsInfo from "../pages/Section/ChefsInfo/ChefsInfo";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        loader: () => fetch ('https://recipe-routes-server-masum2000.vercel.app/chefs')
    },
    {
        path: '/:id',
        element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
        loader: () => fetch ('https://recipe-routes-server-masum2000.vercel.app/chefs')
     },
    {
        path: '/chefs/:_id/recipes',
        element: <Recipe></Recipe>
        
    },
    {
        path: "/chefs/:id",
        element: <ChefsInfo></ChefsInfo>
    },
    {
        path: 'blog',
        element: <Blog></Blog>
    },
    {
       path: 'login',
       element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }






    


])

export default router;