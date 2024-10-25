import logo from './assets/logo.png';

function Header(){
    return(
        <header style={headerStyling.header}>
            <img src={logo} alt='logo'></img>
            <h1>Welcome to product page!</h1>
        </header>
    );
}

const headerStyling = {
    header: {
    }
}

export default Header;