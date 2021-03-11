//import ShoppingCart from "./shoppingCart";
import "./CSS/header.css";
import { Cart } from 'grommet-icons';
import { BrowserRouter, Link } from 'react-router-dom';
import { CSSProperties } from "react";


function Header() {
    return(
        <div className="header">
            <BrowserRouter>
            <Link to="/" style={noTextDecoration}>
                <h1 className="logo">BJÖRK</h1>
            </Link>
            <Link to="/shoppingCart">
                <Cart color='white' size='medium' />
            </Link>
            </BrowserRouter> 
        </div>
    )
}

export const noTextDecoration: CSSProperties = {
    textDecoration: 'none'
}



export default Header