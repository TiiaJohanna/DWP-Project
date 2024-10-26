import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CocktailData from "./OpenData";
import StructureOfPage from "./src/Header";


const router = createBrowserRouter([
    { path: "/", element: <StructureOfPage />},
    { path: "/opendata", element: <CocktailData /> }
]);

function NavigationBar(){
    return(
        <RouterProvider router={router} />
    ) 
}

export default NavigationBar;