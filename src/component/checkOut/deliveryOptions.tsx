import { AccordionPanel, Box, Text, RadioButton, grommet, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { useContext } from "react";
import { CSSProperties } from "react";
import { OrderContext } from "../../contexts/orderContext";

// interface Option {
//     id: string, // behövs id??
//     titel: string,
//     price: number,
//     days: string,
// }

function DeliveryOptions() {
    
    // const [deliveryOption, setDeliveryOption] = useState();
    const { setDeliveryOptionField, order } = useContext(OrderContext);

    const theme = deepMerge(grommet, {
        global: {
            colors: {
              focus: "none"
            }
          },
        radioButton: {
            color: '#85A588',
            check: {
                background: '#85A588',
                color: '#85A588',
            }
        },
    });

    // const options: Option[] = [
    //     {
    //         id: '0',
    //         titel: 'Postnord',
    //         price: 29,
    //         days: '3-5 arbetsdagar'
    //     },
    //     {
    //         id: '1',
    //         titel: 'DHL',
    //         price: 59,
    //         days: '2 arbetsdagar'
    //     },
    //     {
    //         id: '2',
    //         titel: 'Budbee',
    //         price: 0,
    //         days: '3-8 arbetsdagar'
    //     }
    // ]

    return (
        <Grommet theme={theme} color="#85A588">
        <AccordionPanel label="Leverans" color="#85A588">
            <Box background="light-2" overflow="auto">
                <Box height="small" flex={false}>

                    {/* <Box>
                        <Text>{options[option]?.titel}</Text>
                        <Text>{options[]?.price} kr</Text>
                        <Text>Leverans: {options[options]?.days}</Text>
                        <RadioButton 
                            name="name"
                            value={order.deliveryOption}
                            checked={order.deliveryOption === {titel} }
                            onChange={(event) => setDeliveryOptionField(event.target.value)}
                        />
                    </Box> */}

                    <Box style={{ ...deliveryOptionBox }} >
                        <Text>Postnord</Text>
                        <Text>29kr</Text>
                        <Text>Leveransdag 3-5 dagar</Text>
                        <RadioButton
                            name="name"
                            value= {order.deliveryOption}
                            checked={order.deliveryOption === 'Postnord'}
                            onChange={(event) => setDeliveryOptionField(event.target.value)}
                            // onChange={(event) => setCustomerField(event.target.value, "fullname") } 

                        />
                    </Box>
                    <Box style={{ ...deliveryOptionBox }}>
                        <Text>DHL</Text>
                        <Text>29kr</Text>
                        <Text>Leveransdag 3-5 dagar</Text>
                        <RadioButton
                            name="name"
                            value= "DHL"
                            checked={order.deliveryOption === 'DHL'}
                            onChange={(event: any) => setDeliveryOptionField(event.target.value)}
                        />
                    </Box>
                    {/* <Box style={{ ...deliveryOptionBox }}>
                        <Text>Budbee</Text>
                        <Text>29kr</Text>
                        <Text>Leveransdag 3-5 dagar</Text>
                        <RadioButton
                            name="name"
                            value= "Budbee"
                            checked={deliveryOption === 'Budbee'}
                            onChange={(event: any) => setDeliveryOption(event.target.value)}
                        />
                    </Box> */}

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

// textstolek https://storybook.grommet.io/?path=/story/type-text-all--all
// radiobutton simple https://storybook.grommet.io/?path=/story/input-radiobutton-simple--simple