import { Box, Text } from "grommet"
import { useContext } from "react"
import { CartContext } from '../../contexts/CartContext';
import ShoppingItem from "../ShoppingCart/shoppingItem";

function CartInCheckout() {

    const { cart, totalSum } = useContext(CartContext)

    return (
        <Box pad='large'>
            <Box>
                {cart.map((cartItem, index) =>
                    <ShoppingItem
                        cartItem={cartItem}
                        key={index}
                    />
                )}
            </Box>
            <Box>
                <Text size='small'>Varav moms {totalSum * 0.25 }</Text>
                <Text weight='bold'>Totalbelopp: {totalSum}</Text>
                
            </Box>
        </Box>

    )
}

export default CartInCheckout