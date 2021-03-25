import { Accordion, Box, Button, Grommet } from 'grommet';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../errorBoundary';
import DetailsForm from './detailsForm';
import CartInCheckout from './cartInCheckout';
import DeliveryOptions from './deliveryOptions';
import Payment from './payment';
import { OrderContext } from '../../contexts/orderContext';
import { useContext } from 'react';
import { theme } from "../theme";

function CheckOut() {
    
    const { order } = useContext(OrderContext)

    const isFormValid = order.customer.fullname; //denna ska fyllas på med allt
    
    return (
        <Grommet theme={theme}>
            <Box>
                <ErrorBoundary>
                    <Box direction='row'>
                        <DetailsForm />
                        <CartInCheckout />
                    </Box>
                    
                    <Accordion multiple pad="medium" width="60%" >
                        <DeliveryOptions />
                        <Payment />
                    </Accordion>

                    <Box direction="row" gap="medium" pad="1rem">
                        <Link to='./orderConfirmation'>
                            <Button
                                form="idDetailsForm"
                                type="submit"
                                label="Bekräfta köp"
                                disabled={!isFormValid}
                                color='#708C7E'
                            />
                        </Link>
                    </Box>
                </ErrorBoundary>
            </Box >
        </Grommet>
    )
}
export default CheckOut;