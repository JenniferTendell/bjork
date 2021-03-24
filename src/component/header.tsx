//import ShoppingCart from "./shoppingCart";
import { Link } from 'react-router-dom';
import { CSSProperties } from "react";
import { Box, Grommet } from 'grommet';
import ShoppingCartButton from "./ShoppingCart/shoppingCartButton";
import { theme } from "./theme";

function Header() {
    return (
        <Grommet theme={theme}>
        <header style={header}>
            <Link to="/" style={noTextDecoration}>
                <h1 style={logo}>BJÖRK</h1>
            </Link>
            <Box>
                <ShoppingCartButton />
            </Box>
        </header>
        </Grommet>
    )
}

export const noTextDecoration: CSSProperties = {
    textDecoration: 'none'
}

export const header: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '4.5rem',
    backgroundColor: '#708C7E',
}

export const logo: CSSProperties = {
    fontWeight: 'lighter',
    fontSize: '2.8rem',
    color: 'white',
    textDecoration: 'none',
}



export default Header