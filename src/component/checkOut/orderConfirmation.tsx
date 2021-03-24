import { Box, Text } from "grommet"
import { useContext } from "react";
import { OrderContext } from '../../contexts/orderContext';

function OrderConfirmation( ) {
    const { order } = useContext(OrderContext)

    return (
        <Box>
            <Text>
                Tack {order.customer.fullname} för din order.
                Din beställning leveras med {order.deliveryOption}.
                Betalning sker med {order.paymentMethod}
                Kortinfo är 
                {order.cardDetails?.cardNumber} 
                {order.cardDetails?.expireDate} 
                {order.cardDetails?.cvcCode}
            </Text>
    
        </Box>
    )
}
export default OrderConfirmation; 