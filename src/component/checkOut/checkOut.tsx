import { Accordion, Box, Button } from 'grommet';
// import { Link } from 'react-router-dom';
import ErrorBoundary from '../errorBoundary';
import DetailsForm from './detailsForm';
import DeliveryOptions from './deliveryOptions';
import Payment from './payment';
import OrderProvider from '../../contexts/orderContext';
// import { useState } from 'react';

function CheckOut() {

    // {const [ setHandleSubmitButton ] = useState()
   

    return (
        <OrderProvider>
            <Box>
                <ErrorBoundary>
                    <DetailsForm />
                    <Accordion multiple pad="medium" width="60%" >
                        <DeliveryOptions />
                        <Payment />
                    </Accordion>

                    <Box direction="row" gap="medium" pad="1rem">
                        {/* <Link to='./orderConfirmation'> */}
                            <Button
                                form="idDetailsForm"
                                type="submit"
                                label="Bekräfta betalning"
                                // value={handleSubmitButton}
                                // onChange={event => setHandleSubmitButton(event.target.value)}
                            />
                        {/* </Link> */}
                    </Box>
                </ErrorBoundary>
            </Box >
        </OrderProvider>
    )
}
export default CheckOut;

// submit:
// https://storybook.grommet.io/?path=/story/input-checkbox-inside-a-formfield--inside-form-field
// https://storybook.grommet.io/?path=/story/input-form-controlled-input-lazy--controlled-input-lazy