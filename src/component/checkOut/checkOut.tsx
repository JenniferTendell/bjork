import { Accordion, Box } from 'grommet';
import DeliveryOptions from './deliveryOptions'
import Payment from './payment'
import DetailsForm from './detailsForm'
import ErrorBoundary from '../errorBoundary';

// const [value, setValue] = React.useState('');
// const [reveal, setReveal] = React.useState(false);

function CheckOut() {
    return (
        <Box>
            <ErrorBoundary>
                <DetailsForm />
                <Accordion multiple pad="medium" width="60%">

                    {/* här ska alla accordinPanel ligga importerade */}
                    <DeliveryOptions />
                    <Payment />
                </Accordion>

                {/* const [value, setValue] = React.useState({ }); */}
            </ErrorBoundary>
        </Box >
    )
}
export default CheckOut;

// function setReveal(arg0: boolean): void {
//     throw new Error('Function not implemented.');
// }

// function setValue(value: string): void {
//     throw new Error('Function not implemented.');
// }