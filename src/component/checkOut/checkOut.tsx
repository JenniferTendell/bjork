import { Accordion, Box, Button, Layer, Text } from 'grommet';
import { Redirect } from 'react-router-dom';
import ErrorBoundary from '../errorBoundary';
import DetailsForm from './detailsForm';
import CartInCheckout from './cartInCheckout';
import DeliveryOptions from './deliveryOptions';
import Payment from './payment';
import { OrderContext } from '../../contexts/orderContext';
import { useState, useContext, } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Lottie from 'react-lottie';
import animationData from './assets/loadingbox.json'

function CheckOut() {

    const { order } = useContext(OrderContext);
    const { emptyCart, } = useContext(CartContext);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const isFormValid =
        order.paymentMethod
        ;

    const [open, setOpen] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const onOpen = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
            setIsDataLoaded(true);
        }, 4000);
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
            </Box >
        </ErrorBoundary>
    )
}
export default CheckOut;