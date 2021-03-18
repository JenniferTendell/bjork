import { DropButton } from "grommet"
import ShoppingCart from "./shoppingCart"
import { Cart, Close } from 'grommet-icons';
import { useState } from "react";

function ShoppingCartButton() {
    const [isCartOpen, setisCartOpen] = useState(false)

    const toggleCartButton = () => {
        setisCartOpen(!isCartOpen)
    }

    return (
        <DropButton
            dropContent={<ShoppingCart />}
            dropProps={{ align: { top: 'bottom' } }}
            onClick={toggleCartButton}
        >     
            {isCartOpen 
                ? <Close color='white' /> 
                : <Cart color='white' />
            }
            
        </DropButton>
    )
}

export default ShoppingCartButton