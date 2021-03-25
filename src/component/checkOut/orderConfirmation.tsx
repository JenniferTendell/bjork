import { Box, Text } from "grommet"
import { useContext } from "react";
import { OrderContext } from '../../contexts/orderContext';

function OrderConfirmation( ) {
    const { order } = useContext(OrderContext)

    const printOrderNumber = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // let getgrejer = localStorage.getItem('cart');

    return (
        <Box pad='large'>
            <Text>
                Tack {order.customer.fullname} för din order.
                Din beställning leveras med {order.deliveryOption}.
                Betalning sker med {order.paymentMethod}.
                Dina kortuppgifter är 
                {order.cardDetails?.cardNumber} 
                {order.cardDetails?.expireDate} 
                {order.cardDetails?.cvcCode}.
                Ordernummer: {printOrderNumber(1000, 9999)}
                {/* {getgrejer} */}
            </Text>                
    
        </Box>
    )
}
export default OrderConfirmation; 