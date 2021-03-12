import { AccordionPanel, Box, Text, RadioButton } from "grommet";
import { useState } from "react";
import { CSSProperties } from "react";

// export const Simple = () => {
    const [checked, setChecked] = useState(false);
    
function deliveryOptions() {

    
    return (
        <AccordionPanel label="Leverans">
            <Box background="light-2" overflow="auto" height="large">
                <Box height="large" flex={false}>
                    {/* <RadioButtonGroup
                        name="radio"
                        options={[
                            { label: 'Postnord', value: 'Postnord', id: "one", },
                            { label: 'DHL', value: 'DHL' },
                            { label: 'Budbee', value: 'Budbee' },
                        ]}
                        // value={deliveryRadioButton}
                        // onChange={event => setValue(event.target.value)}
                        // {...props}
                    /> */}

                    <Box style={{ ...deliveryOptionBox }} id="one">
                        <Text>Postnord</Text>
                        <Text>Leveransdag 3-5 dagar</Text>
                        <Text>29kr</Text>
                        <RadioButton
                            label="deliveryRadioButton"
                            name="name"
                            value= 'deliveryRadioButton'
                            checked={checked}
                            onChange={(event) => setChecked(event.target.checked)}
                        />
                    </Box>
                    <Box style={{ ...deliveryOptionBox }}>
                        <Text>DHL</Text>
                        <Text>Leveransdag 3-5 dagar</Text>
                        <Text>29kr</Text>
                    </Box>
                    <Box style={{ ...deliveryOptionBox }}>
                        <Text>Budbee</Text>
                        <Text>Leveransdag 3-5 dagar</Text>
                        <Text>29kr</Text>

                    </Box>
                </Box>
            </Box>
        </AccordionPanel>
    )
}
export default deliveryOptions 

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