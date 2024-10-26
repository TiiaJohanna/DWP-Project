import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import SelectionOfProducts from './OrderForm';

function Header(){
    return(
        <header style={headerStyling.header}>
            <img style={headerStyling.image} src={logo} alt='logo'></img>
            <h1 style={headerStyling.text}>Welcome to product page!</h1>
        </header>
    );
}

const headerStyling = {
    header: { 
        display: 'flex',
        alingItems: 'center',
    },
    image: {
        width: '80px',
        height: '80px'
    },
    text: {
        margin: '20px'
    }
}

function StructureOfPage() {
    
    const navigate = useNavigate();

    const visitCocktailData = () => {
        navigate('/opendata');
    }

    return(
        <div>
            <Header />
            <SelectionOfProducts />
            <br></br>
            <br></br>
            <CocktailData />
        </div>
    )
}

export default StructureOfPage;