//import ShoppingCart from "./shoppingCart";
import "./CSS/header.css";
import { Cart } from 'grommet-icons';
import { Link } from 'react-router-dom';
import { CSSProperties } from "react";


function Header() {
    return (
        <div className="header">
            <Link to="/" style={noTextDecoration}>
                <h1 className="logo">BJÖRK</h1>
            </Link>
            <Link to="/shoppingCart">
                <Cart color='white' size='medium' />
            </Link>
        </div>
    )
}

export const noTextDecoration: CSSProperties = {
    textDecoration: 'none'
}



export default Header