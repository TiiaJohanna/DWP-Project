import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CocktailData from "./OpenData";


const router = createBrowserRouter([
    { path: "/", element: <},
    { path: "/opendata", element: <CocktailData /> }
]);

function NavigationBar(){
    return <RouterProvider router={router} />;
}

export default NavigationBar;