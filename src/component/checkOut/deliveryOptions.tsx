import { AccordionPanel, Box, Text, RadioButton, grommet, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { useContext } from "react";
import { OrderContext } from "../../contexts/orderContext";

interface Option {
    titel: string,
    price: number,
    days: string,
}

function DeliveryOptions() {
    
    const { setDeliveryOptionField, order } = useContext(OrderContext);

    const theme = deepMerge(grommet, {
        radioButton: {
            color: '#85A588',
            check: {
                background: '#85A588',
                color: '#85A588',
            },
        }
    });

    const options: Option[] = [
        {
            titel: 'Postnord',
            price: 29,
            days: '3-5 arbetsdagar'
        },{
            titel: 'DHL',
            price: 59,
            days: '2 arbetsdagar'
        },{
            titel: 'Budbee',
            price: 0,
            days: '3-8 arbetsdagar'
        }
    ]

    return (
        <Grommet theme={theme} color="#85A588">
        <AccordionPanel label="Leverans" color="#85A588">
            <Box background="light-2" overflow="auto">
                <Box height="small" flex={false}>

                    {options.map((option, index ) => 
                        <Box key={index}
                            background='#B5BCB0'
                            pad='small'
                            round='small'
                            margin='small'
                            direction='row'
                            justify='between'
                            
                        >
                            <Text>{option.titel}</Text>
                            <Text>{option.price} kr</Text>
                            <Text>Leverans: {option.days}</Text>
                            <RadioButton 
                                name="Delivery"
                                value={option.titel}
                                checked={order.deliveryOption === option.titel }
                                onChange={(event) => setDeliveryOptionField(event.target.value)}
                            />
                        </Box>
                    )}
                </Box>
            </Box>
        </AccordionPanel>
        </Grommet>
    )
}
export default DeliveryOptions;