import { Accordion, Box, Text, Button, Grommet, Layer } from 'grommet';
import { Redirect } from 'react-router-dom';
import ErrorBoundary from '../errorBoundary';
import DetailsForm from './detailsForm';
import CartInCheckout from './cartInCheckout';
import DeliveryOptions from './deliveryOptions';
import Payment from './payment';
import { OrderContext } from '../../contexts/orderContext';
import { useState, useContext } from 'react';
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

    // async function loadingPayment() {
    //     let promise = new Promise((resolve,) => {
    //         setTimeout(() => resolve('done!!!'), 5000)
    //     })

    //     let result = await promise;

    //     alert(result); // ska vara linken. 
    //     <Link to='./orderconfirmation/' />
    // }

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
        <Grommet theme={theme}>
            <ErrorBoundary>
                <Box>
                    {/* {localStorage.length > 0 ? */}
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
                                    {/* <Link to='./orderConfirmation/' onClick={loadingPayment}> */}
                                        <Button
                                            form="idDetailsForm"
                                            type="submit"
                                            label="Bekräfta köp"
                                            disabled={!isFormValid}
                                            color='#708C7E'
                                            onClick={() => { onOpen(); emptyCart() }}
                                            // onClick={onOpen}
                                        />
                                    {/* </Link> */}
                                    {isDataLoaded && (
                                        <Box>
                                            {/* <Text>Congrats! 🎉 </Text> */}
                                            {/* <Link to='./orderConfirmation/'></Link> */}
                                            {/* {emptyCart()} */}
                                            <Redirect to='./orderConfirmation' />
                                            {/* <OrderConfirmation /> */}
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
                                            <Text>Loading...</Text>
                                        </Box>
                                    </Layer>
                                )}
                            </Box>

                        </Box>
                        {/* :
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
                        </Box> */}
                    {/* // } */}
                </Box >
            </ErrorBoundary>
        </Grommet >
    )
}

export default CheckOut;