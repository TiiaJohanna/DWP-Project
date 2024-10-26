import { useState } from "react";
import OrderInfo from "./OrderInfo";

// Here are the products and their prices per piece
function SelectionOfProducts(){
    const products = [
        {name:'AMD Ryzen 5 3600', price: 245},
        {name:'Intel i5-10400F', price: 180},
        {name:'NVIDIA RTX 3060', price: 400},
        {name:'Corsair Vengeance 16GB RAM', price: 85},
        {name:'Samsung 970 EVO 1TB SSD', price: 150},
        {name:'ASUS TUF Gaming X570', price: 210}
    ];

    // Initializes the selected product and quantity states
    const [productName, setProductName] = useState(products[0]);
    const [Quantity, setQuantity] = useState(1);

    // Function to change the selected product from the dropdown
    const changingProduct = (e) => {
        const productName = e.target.value;
        const product = products.find((p) => p.name === productName);
        setProductName(product);
    }

    // Increases the quantity by 1
    const quantityIncrease = () => {
        setQuantity((changeQuantity) => changeQuantity + 1);
    }

    // Decreases the quantity by 1 but doesn't go below 0
    const quantityDecrease = () => {
        setQuantity((changeQuantity) => Math.max(0, changeQuantity - 1));
    }

    // The layout of the component assignment
    return(
        <>
        <h3>Select product</h3>
        <label>
            <span>Product: </span>
            <select value={productName.name} onChange={changingProduct}>
                {products.map((p) => (
                    <option key={p.name} value={p.name}>
                        {p.name + " ("+ p.price + "e)"}
                    </option>
                ))}
            </select>
        </label>
        <br></br>
        <br></br>
        <span>Quantity: </span>
        <button onClick={quantityDecrease}> - </button>
        <span>  {Quantity} </span>
        <button onClick={quantityIncrease}>+</button>
        <OrderInfo productName={productName} Quantity={Quantity}></OrderInfo>
        </>
    )
}

export default SelectionOfProducts;
