import { AccordionPanel, Box, Text, RadioButton, grommet, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import React from "react";
// import { useState } from "react";
import { CSSProperties } from "react";


// class DeliveryOptions extends Component {
function DeliveryOptions() {
    
    // kan skrivas som båda dessa vet inte vilken som är mest rätt
    // const [selected, setSelected] = useState();
    const [selected, setSelected] = React.useState();

    const theme = deepMerge(grommet, {
        radioButton: {
            color: '#85A588',
            check: {
                background: '#85A588',
                color: '#85A588',
            },
        }
    });

    return (
        <Grommet theme={theme} color="#85A588">
        <AccordionPanel label="Leverans" color="#85A588">
            <Box background="light-2" overflow="auto" height="large" >
                <Box height="large" flex={false}>
                    <Box style={{ ...deliveryOptionBox }} >
                        <Text>Postnord</Text>
                        <Text>29kr</Text>
                        <Text>Leveransdag 3-5 dagar</Text>
                        <RadioButton
                            name="name"
                            value= "deliveryRadioButton1"
                            checked={selected === 'deliveryRadioButton1'}
                            onChange={(event: any) => setSelected(event.target.value)}
                        />
                    </Box>
                    <Box style={{ ...deliveryOptionBox }}>
                        <Text>DHL</Text>
                        <Text>29kr</Text>
                        <Text>Leveransdag 3-5 dagar</Text>
                        <RadioButton
                            name="name"
                            value= "deliveryRadioButton2"
                            checked={selected === 'deliveryRadioButton2'}
                            onChange={(event: any) => setSelected(event.target.value)}
                        />
                    </Box>
                    <Box style={{ ...deliveryOptionBox }}>
                        <Text>Budbee</Text>
                        <Text>29kr</Text>
                        <Text>Leveransdag 3-5 dagar</Text>
                        <RadioButton
                            name="name"
                            value= "deliveryRadioButton3"
                            checked={selected === 'deliveryRadioButton3'}
                            onChange={(event: any) => setSelected(event.target.value)}
                        />
                    </Box>
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

// const radioButton: CSSProperties = {
//     color: 'green',
//     background: 'red',
//     height: '10rem',
// }

// textstolek https://storybook.grommet.io/?path=/story/type-text-all--all
// radiobutton simple https://storybook.grommet.io/?path=/story/input-radiobutton-simple--simple