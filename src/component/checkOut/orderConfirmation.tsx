import { Box, Text } from "grommet"
import { useContext } from "react";
import OrderProvider, { OrderContext } from '../../contexts/orderContext';

function OrderConfirmation( ) {
    const { order } = useContext(OrderContext)

    return (
        <OrderProvider>
        <Box>
            <Text> hej </Text>

            <Text>
                Tack {order.customer.fullname} för din order.
                Din beställning leveras med {order.deliveryOption}.
            </Text>
    
        </Box>
        </OrderProvider>
    )
}
export default OrderConfirmation; 
    
