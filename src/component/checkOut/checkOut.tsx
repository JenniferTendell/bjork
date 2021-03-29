import { Accordion, Box, Button, Layer, Text } from 'grommet';
import { Redirect } from 'react-router-dom';
import ErrorBoundary from '../errorBoundary';
import DetailsForm from './detailsForm';
import CartInCheckout from './cartInCheckout';
import DeliveryOptions from './deliveryOptions';
import Payment from './payment';
import { OrderContext } from '../../contexts/orderContext';
import { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Lottie from 'react-lottie';
import animationData from './assets/loadingCart.json'

function CheckOut() {

    const { order } = useContext(OrderContext);
    const { emptyCart } = useContext(CartContext);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const isFormValid =
        order.customer.fullname &&
        order.customer.phoneNumber &&
        order.customer.address &&
        order.customer.zipcode &&
        order.customer.city &&
        order.deliveryOption &&
        order.paymentMethod
        ;

    const [open, setOpen] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const onOpen = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
            setIsDataLoaded(true);
        }, 4500);
    };

    return (
        <main>
            <ErrorBoundary>
                <Box>
                    <Box direction='row' justify='center' >
                        <Box>
                            <DetailsForm />
                            <Accordion multiple pad="large" >
                                <DeliveryOptions />
                                <Payment />
                            </Accordion>
                        </Box>
                        <CartInCheckout />
                    </Box>

                    <Box direction="column" align='center'>
                        <Box width='small' margin='small'>
                            <Button
                                form="idDetailsForm"
                                type="submit"
                                label="Bekräfta köp"
                                disabled={!isFormValid}
                                color='#708C7E'
                                style={{
                                    'fontWeight': 'normal', 
                                    'background': '#708C7E',
                                    'color': 'white',
                                }}
                                onClick={() => { onOpen(); emptyCart() }}
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
                                >
                                    <Box direction='column' align='center'>
                                        <Lottie
                                            options={defaultOptions}
                                            height={400}
                                            width={400}
                                        />
                                        <Text>Din order behandlas...</Text>
                                    </Box>
                                </Box>
                            </Layer>
                        )}
                    </Box>
                </Box>
            </ErrorBoundary>
        </main>
    )
}
export default CheckOut;