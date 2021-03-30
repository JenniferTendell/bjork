import { Box, Text } from "grommet"
import { useContext } from "react"
import { CartContext } from '../../contexts/CartContext';
// import { OrderContext } from "../../contexts/orderContext";
import ShoppingItem from "../ShoppingCart/shoppingItem";

function CartInCheckout() {

    const { cart, totalSum } = useContext(CartContext)
    // const { order } = useContext(OrderContext)

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
                <Text size='small'>Varav moms {totalSum * 0.25 }</Text>
                <Text weight='bold'>Belopp: {totalSum}</Text>  
                {/* <Text>Frakt: {order.deliveryOption?.price} kr</Text>  */}
            </Box>
        </Box>
    )
}

export default CartInCheckout