import { Box, DropButton, Text } from "grommet"
import ShoppingCart from "./shoppingCart"
import { Cart, Close } from 'grommet-icons';
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

function ShoppingCartButton() {
    const [isCartOpen, setisCartOpen] = useState(false)
    const { cart } = useContext(CartContext);

    const toggleCartButton = () => {
        setisCartOpen(!isCartOpen)
    }


    return (
        <DropButton
            dropContent={<ShoppingCart />}
            dropProps={{ align: { top: 'bottom' } }}
            onClick={toggleCartButton}
        >
            <Box direction= 'row'>
                {isCartOpen
                    ? <Close color='white' />
                    : <Cart color='white' />
                }
                {cart.length > 0
                    ? <Box
                        round='small'
                        height='1.3rem'
                        width='1.3rem'
                        background='#37513B'
                        justify='center'
                        margin= {{ 'left': '-0.3rem', 'top': '-0.5rem' }}
                    >
                        <Text
                            textAlign='center'
                            size='xsmall'
                            weight= 'bold'
                        >
                            {cart.length}
                        </Text>
                    </Box>
                    : <Box />
                }
            </Box>
        </DropButton>
    )
}

export default ShoppingCartButton