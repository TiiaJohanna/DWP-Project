import { useState } from "react";
import OrderInfo from "./OrderInfo";

function SelectionOfProducts(){
    const products = [
        {name:'AMD Ryzen 5 3600'},
        {name:'Intel i5-10400F'},
        {name:'NVIDIA RTX 3060'},
        {name:'Corsair Vengeance 16GB RAM'},
        {name:'Samsung 970 EVO 1TB SSD'},
        {name:'ASUS TUF Gaming X570'}
    ];

    const prices = [
        {price: 245},
        {price: 180},
        {price: 400},
        {price: 85},
        {price: 150},
        {price: 210}
    ];

    const [productName, setProductName] = useState(products[0]);
    const [Quantity, setQuantity] = useState(1);

    const changingProduct = (e) => {
        const productName = e.target.value;
        const product = products.find((p) => p.name === productName);
        setProductName(product);
    }

    const quantityIncrease = () => {
        setQuantity((changeQuantity) => changeQuantity + 1);
    }

    const quantityDecrease = () => {
        setQuantity((changeQuantity) => Math.max(0, changeQuantity - 1));
    }

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
        <span>Quantity: </span>
        <button onClick={quantityDecrease}>-</button>
        <span>{Quantity}</span>
        <button onClick={quantityIncrease}>+</button>
        <OrderInfo productName={productName} Quantity={Quantity}></OrderInfo>
        </>
    )
}

export default SelectionOfProducts;


