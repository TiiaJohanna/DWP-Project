import logo from './public/logo.png';

// Includes header and it's components (text,image)
function Header(){
    return(
        <header style={headerStyling.header}>
            <img style={headerStyling.image} src={logo} alt='logo'></img>
            <h1 style={headerStyling.text}>Welcome to product page!</h1>
        </header>
    );
}

// Some styling for the header, image and text
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

export default Header;