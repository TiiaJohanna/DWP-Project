import CocktailData from "../OpenData"
import Header from "./Header"
import SelectionOfProducts from "./OrderForm"

// Shows what the page looks like
function App() {
  return (
    <div>
      <Header />
      <SelectionOfProducts />
      <br></br>
      <br></br>
      <CocktailData />
    </div>
  )
}



export default App
