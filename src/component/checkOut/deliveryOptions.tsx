import { AccordionPanel, Box, Text, RadioButton, grommet, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { useContext } from "react";
import { CSSProperties } from "react";
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
        },
        {
            titel: 'DHL',
            price: 59,
            days: '2 arbetsdagar'
        },
        {
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
                        <Box style={deliveryOptionBox} key={index}>
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

const deliveryOptionBox: CSSProperties = {
    background: '#B5BCB0',
    margin: '.5rem',
    padding: '1rem',
    borderRadius: '1rem',
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}