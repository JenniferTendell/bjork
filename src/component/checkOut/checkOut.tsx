
import { Accordion, Box, Text, Button, Layer } from 'grommet';
import { Redirect } from 'react-router-dom';
import ErrorBoundary from '../errorBoundary';
import DetailsForm from './detailsForm';
import CartInCheckout from './cartInCheckout';
import DeliveryOptions from './deliveryOptions';
import Payment from './payment';
import { OrderContext } from '../../contexts/orderContext';
import { useState, useContext } from 'react';
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

    const [open, setOpen] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const onOpen = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
            setIsDataLoaded(true);
        }, 2000);
    };

    return (
            <ErrorBoundary>
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
                        <Box>
                            <Button
                                form="idDetailsForm"
                                type="submit"
                                label="Bekräfta köp"
                                disabled={!isFormValid}
                                color='#708C7E'
                                onClick={() => { onOpen(); emptyCart() }}
                            // onClick={onOpen}
                            />
                            {isDataLoaded && (
                                <Box>
                                    <Redirect to='./orderConfirmation' />
                                </Box>
                            )}
                        </Box>
                        {open && (
                            <Layer>
                                <Box
                                    pad='large'
                                    align="center"
                                    justify="center"
                                    color='#708C7E' // funkar inte 
                                >
                                    <Text>Laddar...</Text>
                                </Box>
                            </Layer>
                        )}
                    </Box>
                </Box >
            </ErrorBoundary>
    )
}
export default CheckOut;