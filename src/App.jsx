import CocktailData from "../OpenData"
import Header from "./Header"
import SelectionOfProducts from "./OrderForm"


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
