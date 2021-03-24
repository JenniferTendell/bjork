import { Accordion, Box, Button } from 'grommet';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../errorBoundary';
import DetailsForm from './detailsForm';
import DeliveryOptions from './deliveryOptions';
import Payment from './payment';
import { OrderContext } from '../../contexts/orderContext';
import { useContext } from 'react';

function CheckOut() {

    const { order } = useContext(OrderContext)
   
    const isFormValid = order.customer.fullname;
    
    return (
            <Box>
                <ErrorBoundary>
                    <DetailsForm />
                    
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
                            />
                        </Link>
                    </Box>
                </ErrorBoundary>
            </Box >
    )
}
export default CheckOut;