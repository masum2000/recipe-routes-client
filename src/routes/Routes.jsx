import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Recipe from "../pages/Section/Recipe/Recipe";
import ChefSection from "../pages/Section/ChefSection/ChefSection";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
    },
    {
        path: '/chefs/:_id/recipes',
        element: <Recipe></Recipe>
    },
    {
        path: "/chefs/:id",
        element: <ChefSection></ChefSection>,
      },

]) 

export default router;