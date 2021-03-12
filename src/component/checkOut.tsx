// import React, { useState } from 'react';
import { Accordion, AccordionPanel, Box,  Button,  Form, FormField, MaskedInput, RadioButtonGroup, TextInput } from 'grommet';
import {  MailOption, } from 'grommet-icons';
import { CSSProperties } from 'react';
// import { grommet } from 'grommet/themes';
// import { normalizeColor } from 'grommet/utils';


// const [name, setName] = useState('');
// const [email, setEmail] = useState('');

const IPv4ElementExp = /^[0-1][0-9][0-9]$|[0-4][0-9]$|[0-5]$|[0-9][0-9]$|^[0-9]$/;
// const month: number; new Date(2021, month, 0).getDate(); // hämtar så man får val när man trycker

// const [value, setValue] = React.useState('');
// const [reveal, setReveal] = React.useState(false);

function CheckOut() {
    return (
        <Box>

            <Form
                style={{ ...form }}
            // value={value}
            // onChange={nextValue => setValue(nextValue)}
            // onSubmit={({ value }) => { }}
            >

                <FormField name="fullname" htmlFor="fullname" label="För- och efternamn">
                    <TextInput required id="fullname" name="fullname" />
                </FormField>

                <FormField label="Email" name="email" required>
                    <TextInput reverse icon={<MailOption />} name="email" type="email" />
                </FormField>

                <FormField name="address" htmlFor="address" label="Gatuadress">
                    <TextInput id="address" name="address" />
                </FormField>

                <FormField name="zipcode" htmlFor="zipcode" label="Postnummer">
                    <TextInput id="zipcode" name="zipcode" />
                </FormField>

                {/* <Box direction="row" gap="medium">
                    <Button type="submit" primary label="Submit" />
                </Box> */}
            </Form>


            <Accordion multiple pad="medium" width="60%">
                <AccordionPanel label="Leverans">
                    <Box background="light-2" overflow="auto" height="medium">
                        <Box height="large" flex={false}>
                            <RadioButtonGroup
                                name="radio"
                                options={[
                                    { label: 'Postnord', value: 'Postnord', id: "one",},
                                    { label: 'DHL', value: 'DHL' },              
                                    { label: 'Budbee', value: 'Budbee' },
                                ]}
                                // value={value}
                                // onChange={event => setValue(event.target.value)}
                                // {...props}
                            />

                            <RadioButtonGroup 
                                name="radio"
                                options={['Postnord', 'DHL', 'Budbee']}

                            />

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

                <AccordionPanel label="Betalning">
                    <Box background="light-2" style={{ height: 'large' }}>
                        {/* <Box> */}
                        <MaskedInput
                            mask={[
                                {
                                    length: [1, 4],
                                    regexp: IPv4ElementExp,
                                    placeholder: 'xxxx',
                                },
                                { fixed: '-' },
                                {
                                    length: [1, 4],
                                    regexp: IPv4ElementExp,
                                    placeholder: 'xxxx',
                                },
                                { fixed: '-' },
                                {
                                    length: [1, 4],
                                    regexp: IPv4ElementExp,
                                    placeholder: 'xxxx',
                                },
                                { fixed: '-' },
                                {
                                    length: [1, 4],
                                    regexp: IPv4ElementExp,
                                    placeholder: 'xxxx',
                                },
                            ]}
                            // value={value}
                            // onChange={event => setValue(event.target.value)}
                        />
                        {/* </Box> */}

                        {/* <Box> */}
                        <MaskedInput
                            mask={[
                            {
                                length: [1, 2],
                                // options: Array.from({ length: 12 }, (v, k) => k + 1),
                                regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
                                placeholder: 'mm',
                            },
                            { fixed: '-' },
                            {
                                length: 2,
                                // options: Array.from({ length: 100 }, (v, k) => 2019 - k),
                                regexp: /^2[1-9]$|^[0-9]$/,
                                placeholder: 'yyyy',
                            },
                            ]}
                            // value={value}
                            // onChange={event => setValue(event.target.value)}
                        />
                        {/* </Box> */}

                    </Box>
                </AccordionPanel>
            </Accordion>


            {/* const [value, setValue] = React.useState({ }); */}


            


            
            

            <Box
                width="medium"
                direction="row"
                margin="large"
                align="center"
                round="small"
                border
            >
                <TextInput
                    // plain
                    // type={reveal ? 'text' : 'password'}
                    // value={value}
                    // onChange={event => setValue(event.target.value)}
                />
                <Button
                    // icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
                    // onClick={() => setReveal(!reveal)}
                />
            </Box>



        </Box >
    )
}
export default CheckOut;

// IPv4MaskedInput.storyName = 'IPv4 address';

// IPv4MaskedInput.parameters = {
//   chromatic: { disable: true },
// };


// function setReveal(arg0: boolean): void {
//     throw new Error('Function not implemented.');
// }

// function setValue(value: string): void {
//     throw new Error('Function not implemented.');
// }



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

// kort-nummer https://storybook.grommet.io/?path=/story/input-maskedinput-ipv4-address--i-pv-4-masked-input
// utgångsdatum https://storybook.grommet.io/?path=/story/input-maskedinput-date--date-masked-input
// lösenord / CVC https://storybook.grommet.io/?path=/story/input-textinput-password--password