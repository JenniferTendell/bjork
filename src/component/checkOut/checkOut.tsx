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
import '../../index.css'

function CheckOut() {
    
    const { order } = useContext(OrderContext);
    const { emptyCart, totalSum } = useContext(CartContext);
    
    const [open, setOpen] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
   
    const onOpen = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
            setIsDataLoaded(true);
        }, 4500);
    };

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
        order.customer.email &&
        order.customer.phoneNumber &&
        order.customer.address &&
        order.customer.zipcode &&
        order.customer.city &&
        order.deliveryOption &&
        order.paymentMethod
    ;

    return (
        <main>
            <ErrorBoundary>
                <Box>
                    <div className={'checkoutDirectionSmallScreen'} >
                        <Box pad='large' style={{ 'flex': '1' }}>
                            <DetailsForm />
                            <Accordion multiple>
                                <DeliveryOptions />
                                <Payment />
                            </Accordion>
                        </Box>
                        <CartInCheckout />
                    </div>

                    <Box direction="column" align='center'>
                        <Box width='small+10px' margin='small'>
                            <Box align='center' pad='small'>
                                {order.deliveryOption?.price === undefined ?
                                    <Text weight='bold'>
                                        Totalbelopp: {totalSum} kr
                                    </Text>
                                    :
                                    <Text weight='bold'>
                                        Totalbelopp: {totalSum + order.deliveryOption.price} kr
                                    </Text>
                                }
                            </Box>
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