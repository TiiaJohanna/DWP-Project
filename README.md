# Dynamic Web Page - Assignments
This includes the component, opendata, version control and routing assignments.
**Published Link here**:

## Component
This project is a simple React application that allows users to select a product from a dropdown list and specify the quantity. The application then displays the selected product, quantity and total price in an order summary.

### Features
- **Header**: Contains the header with an image/logo and text.
- **OrderForm**: Includes all of the products and their prices. All the codes that change quantity and prices when picked.
- **OrderInfo**: Contains the layout of this assignment.

## OpenData
For this project I chose to view different Cocktails. This simple React component fetches and displays data from (https://www.thecocktaildb.com/api.php). It showcases a list of Margarita cocktails, including their names, images and instructions for preparation. The component uses 'axios' for making HTTP requests and displays loading and error messages if needed.

### Features
- **Data Fetching**: Retrieves Margarita cocktail data from TheCocktailDB API.
- **Dynamic Display**: Lists cocktails with names, images and instructions.
- **Error Handling**: Displays an error message is there's an issue fetching data.
- **Loading State**: Shows a loading message whide data is being retrieved.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
