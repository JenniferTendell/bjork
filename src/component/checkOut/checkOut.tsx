import ErrorBoundary from '../errorBoundary'; 
import DetailsForm from './detailsForm'
import DeliveryOptions from './deliveryOptions'
import Payment from './payment'
import { Accordion, Box, Button } from 'grommet';

// const [value, setValue] = React.useState('');
// const [reveal, setReveal] = React.useState(false);

function CheckOut() {

    // onSubmit={({ value }) => { }}

    return (
        <Box>
            <ErrorBoundary>
                <DetailsForm />
                <Accordion multiple pad="medium" width="60%" >

                    {/* här ska alla accordinPanel ligga importerade */}
                    <DeliveryOptions  />
                    <Payment />
                </Accordion>

                <Box direction="row" gap="medium">
                    <Button type="submit" label="Bekräfta betalning" />
                </Box>
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