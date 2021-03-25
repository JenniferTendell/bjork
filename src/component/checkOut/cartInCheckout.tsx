import { Box } from "grommet"
import { useContext } from "react"
import { CartContext } from '../../contexts/CartContext';
import ShoppingItem from "../ShoppingCart/shoppingItem";

function CartInCheckout() {

    const { cart } = useContext(CartContext)

    return (
        <Box>
            <Box>
                {cart.map((cartItem, index) =>
                    <ShoppingItem
                        cartItem={cartItem}
                        key={index}
                    />
                )}
            </Box>
        </Box>

    )
}

export default CartInCheckout