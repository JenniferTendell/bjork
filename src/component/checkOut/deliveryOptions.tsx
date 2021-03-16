import { AccordionPanel, Box, Text, RadioButton } from "grommet";
// import React from "react";
import { useState } from "react";
import { CSSProperties } from "react";


// class DeliveryOptions extends Component {
function DeliveryOptions() {
    
    // kan skrivas som båda dessa vet inte vilken som är mest rätt
    const [selected, setSelected] = useState();
    // const [selected, setSelected] = React.useState();

    return (
        <AccordionPanel label="Leverans">
            <Box background="light-2" overflow="auto" height="large">
                <Box height="large" flex={false}>

                    <Box 
                        background="#B5BCB0" 
                        round="1rem" 
                        direction= 'row' 
                        pad="1rem"
                    >
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
                        <Text>Leveransdag 3-5 dagar</Text>
                        <Text>29kr</Text>
                        <RadioButton
                            name="name"
                            value= "deliveryRadioButton2"
                            checked={selected === 'deliveryRadioButton2'}
                            onChange={(event: any) => setSelected(event.target.value)}
                        />
                    </Box>
                    <Box style={{ ...deliveryOptionBox }}>
                        <Text>Budbee</Text>
                        <Text>Leveransdag 3-5 dagar</Text>
                        <Text>29kr</Text>
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
    )
}
export default DeliveryOptions;

const deliveryOptionBox: CSSProperties = {
    background: '#B5BCB0',
    margin: '.5rem',
    padding: '1rem',
    borderRadius: '1rem',
    width: '20rem',
    display: 'flex',
    flexWrap: 'wrap',
}

// textstolek https://storybook.grommet.io/?path=/story/type-text-all--all
// radiobutton simple https://storybook.grommet.io/?path=/story/input-radiobutton-simple--simple