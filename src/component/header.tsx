//import ShoppingCart from "./shoppingCart";
import "./CSS/header.css";
import { Link } from 'react-router-dom';
import { CSSProperties } from "react";
import { Box } from 'grommet';
import ShoppingCartButton from "./shoppingCartButton";



function Header() {
    return (
        <header className="header">
            <Link to="/" style={noTextDecoration}>
                <h1 className="logo">BJÖRK</h1>
            </Link>
            <Box>
                <ShoppingCartButton/>
            </Box>
        </header>
    )
}


export const noTextDecoration: CSSProperties = {
    textDecoration: 'none'
}




export default Header