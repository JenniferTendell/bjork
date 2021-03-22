import { Box, Text } from "grommet"
// import { useContext } from "react";
import OrderProvider, {  } from '../../contexts/orderContext';

function OrderConfirmation( ) {
    // const { order } = useContext(OrderContext)

    return (
        <OrderProvider>
        <Box>
            <Text> hej </Text>

            <Text>
                {/* {order.customer} */}
                {OrderProvider}
                {/* Tack {order.fullname} för din order. */}
                {/* Din beställning leveras med {deliveryOption}. */}
            </Text>
    
            {/* {fullname}
            {email}
            {address}
            {zipcode}
            {city}
            {selectedDeliveryOption} 
            {selectedPayMethod} */}
        </Box>
        </OrderProvider>
    )
}
export default OrderConfirmation; 
    
