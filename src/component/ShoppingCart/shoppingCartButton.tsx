import { Box, DropButton, Text } from "grommet"
import ShoppingCart from "./shoppingCart"
import { Cart, Close } from 'grommet-icons';
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

function ShoppingCartButton() {
    const [open, setOpen] = useState(false)
    const { nrOfProducts } = useContext(CartContext);


    return (
        <DropButton
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            dropContent={<ShoppingCart />}
            dropProps={{ align: { top: 'bottom'} }}
        >
            <Box direction= 'row'>
                {open
                    ? <Close color='white' />
                    : <Cart color='white' />
                }
                {nrOfProducts > 0
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
                            {nrOfProducts}
                        </Text>
                    </Box>
                    : <Box />
                }
            </Box>
        </DropButton>
    )
}

export default ShoppingCartButton