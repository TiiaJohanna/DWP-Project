import logo from './assets/logo.png';

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

function pageStructure() {
    
    const navigate = pageNavigate();
}

export default Header; pageStructure;