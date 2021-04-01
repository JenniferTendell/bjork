import { AccordionPanel, Box, Text, RadioButton } from 'grommet';
import { useContext } from 'react';
import { DeliveryDetails, OrderContext } from '../../contexts/orderContext';

function DeliveryOptions() {
    const { setDeliveryOptionField, order } = useContext(OrderContext);

    const options: DeliveryDetails[] = [
        {
            titel: 'Postnord',
            price: 0,
            days: '3-5 arbetsdagar'
        },{
            titel: 'DHL',
            price: 29,
            days: '3-5 arbetsdagar'
        },{
            titel: 'Budbee',
            price: 49,
            days: '2 arbetsdagar'
        }
    ];

    return (
        <AccordionPanel label='Leverans' color='#85A588'>
            <Box background='light-2' overflow='auto'>
                <Box flex={false}>
                    {options.map((option, index ) => 
                        <Box key={index}
                            background='#B5BCB0'
                            pad='medium'
                            round='small'
                            margin='small'
                            direction='column'
                            justify='between'                          
                        >
                            <Box direction='row' justify='between'>
                                <Text>{option.titel}</Text>
                                <Text>{option.price} kr</Text>
                            </Box>
                            <Box direction='row' justify='between'>
                                <Text>Leverans: {option.days}</Text>
                                <RadioButton 
                                    required
                                    name='Delivery'
                                    value={index}
                                    checked={order.deliveryOption?.titel === option.titel}
                                    onChange={() => {setDeliveryOptionField(option) }}
                                />
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </AccordionPanel>
    );
}
export default DeliveryOptions;