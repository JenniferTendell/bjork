import { Box, Button, Text } from "grommet"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from '../../contexts/orderContext';

function OrderConfirmation() {
    const { order } = useContext(OrderContext)

    const printOrderNumber = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <Box
            justify='center'
            align='center'
            height='60vh' // ändra denna kanske
        >
            <Box
                background='#B5BCB0'
                pad='medium'
                round='small'
                align="center"
            >
                <Text>
                    Tack {order.customer.fullname} för din order.
                </Text>
                <Text>
                    Din beställning leveras med {order.deliveryOption}.
                </Text>
                <Text>
                    Ordernummer: {printOrderNumber(1000, 9999)}
                </Text>
                <Text>
                    Orderbekräftelse har skickats till {order.customer.email}
                </Text>
                <Link to='/'>
                    <Button color='#708C7E'
                        label='Fortsätt handla'
                    />
                </Link>
            </Box>
        </Box>
    )
}
export default OrderConfirmation;