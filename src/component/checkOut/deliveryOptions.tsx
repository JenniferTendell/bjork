import { AccordionPanel, Box,  RadioButtonGroup } from "grommet";
import { CSSProperties } from "react";
// import { useState } from 'react';

// const [deliveryRadioButton, setDeliveryRadioButton] = useState('false');

function deliveryOptions() {
    return (
        <AccordionPanel label="Leverans">
            <Box background="light-2" overflow="auto" height="medium">
                <Box height="large" flex={false}>
                    <RadioButtonGroup
                        name="radio"
                        options={[
                            { label: 'Postnord', value: 'Postnord', id: "one", },
                            { label: 'DHL', value: 'DHL' },
                            { label: 'Budbee', value: 'Budbee' },
                        ]}
                        // value={deliveryRadioButton}
                    // onChange={event => setValue(event.target.value)}
                    // {...props}
                    />

                    {/* <RadioButton
                        name="name"
                        value="option 1"
                        checked={selected === 'option 1'}
                        onChange={event => setSelected(event.target.value)}
                    >
                        {({ checked }) => (
                            <Ascend color={checked ? 'brand' : 'status-unknown'} />
                        )}
                    </RadioButton> */}

                    <Box style={{ ...deliveryOptionBox }} id="one">
                        <h3>Postnord</h3>
                        <p>Leveransdag 3-5 dagar</p>
                        <p>29kr</p>

                    </Box>
                    <Box style={{ ...deliveryOptionBox }}>
                        <h3>DHL</h3>
                        <p>Leveransdag 3-5 dagar</p>
                        <p>29kr</p>
                    </Box>
                    <Box style={{ ...deliveryOptionBox }}>
                        <h3>Budbee</h3>
                        <p>Leveransdag 3-5 dagar</p>
                        <p>29kr</p>

                    </Box>
                </Box>
            </Box>
        </AccordionPanel>
    )
}
export default deliveryOptions;

const deliveryOptionBox: CSSProperties = {
    background: '#B5BCB0',
    margin: '.5rem',
    padding: '1rem',
    borderRadius: '1rem',
    width: '20rem',
    display: 'flex',
    flexWrap: 'wrap',
}