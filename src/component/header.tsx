import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';
import { Box } from 'grommet';
import ShoppingCartButton from './ShoppingCart/shoppingCartButton';

function Header() {
    return (
        <header style={header}>
            <Link to='/' style={noTextDecoration}>
                <h1 style={logo}>BJÖRK</h1>
            </Link>
            <Box>
                <ShoppingCartButton />
            </Box>
        </header>
    );
}

export default Header;

export const noTextDecoration: CSSProperties = {
    textDecoration: 'none'
}

export const header: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '4.5rem',
    backgroundColor: '#708C7E',
    position: 'fixed',
    width: '100%',
    margin: '0'
}

export const logo: CSSProperties = {
    fontWeight: 'lighter',
    fontSize: '2.8rem',
    color: 'white',
    textDecoration: 'none',
    marginTop: '2.5rem'
}


