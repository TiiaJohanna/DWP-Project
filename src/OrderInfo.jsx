
// This function makes a table that shows products and their info
function OrderInfo({ Product, Quantity}) {
    return(
        <div>
            <h3>Order Info</h3>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{Product.name}</td>
                        <td>{Quantity}</td>
                        <td>{Product.price * Quantity + '€'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OrderInfo;