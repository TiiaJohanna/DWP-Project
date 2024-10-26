import axios from "axios";
import { useEffect, useState } from "react";


function CocktailData(){
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(response => {
            setCocktails(response.data.drinks);
            setLoading(false);
        });
    }, []);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

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