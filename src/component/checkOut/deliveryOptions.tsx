import { AccordionPanel, Box, Text, RadioButton } from "grommet";
import { useContext } from "react";
import { OrderContext } from "../../contexts/orderContext";

interface Option {
    titel: string,
    price: number,
    days: string,
}

function DeliveryOptions() {
    
    const { setDeliveryOptionField, order } = useContext(OrderContext);

    const options: Option[] = [
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
    ]

    return (
        <AccordionPanel label="Leverans" color="#85A588">
            <Box background="light-2" overflow="auto">
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
                                    name="Delivery"
                                    value={option.titel}
                                    checked={order.deliveryOption === option.titel }
                                    onChange={(event) => setDeliveryOptionField(event.target.value)}
                                />
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </AccordionPanel>
    )
}
export default DeliveryOptions;