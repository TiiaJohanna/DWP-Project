import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Component to fetch and display cocktail data
function CocktailData(){
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetches data from API when the component is first rendered
    useEffect(() => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(response => {
            setCocktails(response.data.drinks);
            setLoading(false);
        })
        .catch(error => {
            setError(error.message);
            setLoading(false);
        })
    }, []);
    
    // Displays an error message while data is being fetched
    if (loading) return <p>Loading...</p>;

    // Displays an error message if there's an error in fetching data
    if (error) return <p>Error: {error}</p>;

    // Renders the list of coctails with images and instructions
    return(
        <div>
            <h2>Margarita Cocktails</h2>
            <ul>
                {cocktails.map(drink => (
                    <li key={drink.idDrink}>
                        <h3>{drink.strDrink}</h3>
                        <img src={drink.strDrinkThumb} alt={drink.strDrink} width="100" />
                        <p>
                            {drink.strInstructions}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CocktailData;