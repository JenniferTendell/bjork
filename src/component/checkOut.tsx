// import React, { useState } from 'react';
// import Header from "./header"
import { Accordion, AccordionPanel, Box, Button, Form, FormField, RadioButtonGroup, TextInput } from 'grommet';
import { MailOption } from 'grommet-icons';
import { CSSProperties } from 'react';
// import { grommet } from 'grommet/themes';
// import { normalizeColor } from 'grommet/utils';


function CheckOut() {
    return (
        <Box>
            {/* <Header /> */}

            <Form
                style={{ ...form }}
            // value={value}
            // onChange={nextValue => setValue(nextValue)}
            // onSubmit={({ value }) => { }}
            >

                <FormField name="name" htmlFor="text-input-id" label="För- och efternamn">
                    <TextInput required id="text-input-id" name="name" />
                </FormField>

                <FormField label="Email" name="email" required>
                    <TextInput icon={<MailOption />} name="email" type="email" />
                </FormField>

                <FormField name="name" htmlFor="text-input-id" label="Gatuadress">
                    <TextInput id="text-input-id" name="name" />
                </FormField>

                <FormField name="name" htmlFor="text-input-id" label="Postnummer">
                    <TextInput id="text-input-id" name="name" />
                </FormField>

                <Box direction="row" gap="medium">
                    <Button type="submit" primary label="Submit" />
                </Box>
            </Form>


            <Accordion multiple pad="medium" width="60%">
                <AccordionPanel label="Leverans">
                    <Box background="light-2" overflow="auto" height="medium">
                        <Box height="large" flex={false}>
                            <RadioButtonGroup
                                name="radio"
                                options={[
                                    { value: 'c1', label: 'Postnord', id: "one", },
                                    { label: 'DHL', value: 'c2' },
                                    { label: 'Choice 3', value: 'c3' },
                                ]}
                            // value={value}
                            // onChange={event => setValue(event.target.value)}
                            // {...props}
                            />

                            <Box style={{ ...deliveryOptionBox }}>
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

                <AccordionPanel label="Betalning">
                    <Box background="light-2" style={{ height: '50px' }}>
                        Panel 2 contents
                    </Box>
                </AccordionPanel>
            </Accordion>


            {/* const [value, setValue] = React.useState({ }); */}
        </Box >
    )
}

export default CheckOut;

const form: CSSProperties = {
    padding: '1rem',
    width: '50%',
}
const deliveryOptionBox: CSSProperties = {
    background: '#B5BCB0',
    margin: '.5rem',
    padding: '1rem',
    borderRadius: '1rem',
    width: '20rem',
    display: 'flex',
    flexWrap: 'wrap',
}


// olika utseende beroende på om required sätts i FormField eller i Textinput 
// kort-nummer 
// https://storybook.grommet.io/?path=/story/input-maskedinput-ipv4-address--i-pv-4-masked-input