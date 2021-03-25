import { Accordion, Box, Text, Button, Grommet } from 'grommet';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../errorBoundary';
import DetailsForm from './detailsForm';
import CartInCheckout from './cartInCheckout';
import DeliveryOptions from './deliveryOptions';
import Payment from './payment';
import { OrderContext } from '../../contexts/orderContext';
import { useContext } from 'react';
import { theme } from "../theme";
import { CartContext } from '../../contexts/CartContext';

function CheckOut() {

    const { order } = useContext(OrderContext)
    const { emptyCart, } = useContext(CartContext)

    const isFormValid =
        // order.customer.fullname && 
        // order.customer.phoneNumber &&
        // order.customer.address &&
        // order.customer.zipcode &&
        // order.customer.city &&
        // order.deliveryOption && 
        order.paymentMethod
        ;

    return (
        <Grommet theme={theme}>
            <ErrorBoundary>
                <Box>
                    {localStorage.length > 0 ?
                        <Box>
                            <Box direction='row'>
                                <DetailsForm />
                                <CartInCheckout />
                            </Box>

                            <Accordion multiple pad="medium" width="60%" >
                                <DeliveryOptions />
                                <Payment />
                            </Accordion>

                            <Box direction="row" gap="medium" pad="1rem" justify='center'>
                                <Link to='./orderConfirmation'>
                                    <Button
                                        form="idDetailsForm"
                                        type="submit"
                                        label="Bekräfta köp"
                                        disabled={!isFormValid}
                                        color='#708C7E'
                                        onClick={emptyCart}
                                    />
                                </Link>
                            </Box>
                        </Box>
                        :
                        <Box
                            height='60vh'
                            align='center'
                            justify='center'
                        >
                            <Text>
                                Du har inget i vagnen tyvärr
                            </Text>
                            <Link to='/'>
                                <Button
                                    color='#708C7E'
                                    label='Shoppa mer'
                                />
                            </Link>
                        </Box>
                    }
                </Box >
            </ErrorBoundary>
        </Grommet>
    )
}
export default CheckOut;