import { Box, Text } from "grommet"
import { useContext } from "react"
import { CartContext } from '../../contexts/CartContext';
import ShoppingItem from "../ShoppingCart/shoppingItem";

function CartInCheckout() {

    const { cart, totalSum } = useContext(CartContext)

    const ColoredLine = () => (
        <hr
            style={{
                backgroundColor: '#B5BCB0',
                height: 3,
                width: '100%',
                border: 'none',
            }}
        />
    );

    return (
        <Box pad='large' style={{ 'flex':'1' }}>
            <Box>
                {cart.map((cartItem, index) =>
                    <ShoppingItem
                        cartItem={cartItem}
                        key={index}
                    />
                )}
            </Box>
            <Box>
                <ColoredLine/>
                <Box margin='0 1rem'>
                    <Text size='small'>Varav moms {totalSum * 0.25} kr</Text>
                    <Text weight='bold'>Din varukorg: {totalSum} kr</Text>  
                </Box>
                <ColoredLine/>
            </Box>
        </Box>
    )
}

export default CartInCheckout