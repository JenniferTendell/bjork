import { AccordionPanel, Box, Text, Button, MaskedInput, TextInput, RadioButtonGroup, grommet, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";


//för kortnummer 
const IPv4ElementExp = /^[0-1][0-9][0-9]$|[0-4][0-9]$|[0-5]$|[0-9][0-9]$|^[0-9]$/;
// const month: number; new Date(2021, month, 0).getDate(); // hämtar så man får val när man trycker

function payment() {

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
        <Grommet theme={theme}>
            <AccordionPanel label="Betalning">
                <Text>Postnord</Text>
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
                                placeholder: 'yy',
                            },
                        ]}
                    // value={value}
                    // onChange={event => setValue(event.target.value)}
                    />
                    {/* </Box> */}

                    <MaskedInput
                        mask={[
                            {
                                length: 3,
                                regexp: /[0-9]$/,
                                placeholder: 'CVC',

                            }
                        ]}
                    />
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





                    <Box>
                        <Text>Klarna</Text>
                        <RadioButtonGroup
                            name="radio"
                            options={[
                                { label: 'Faktura 14 dagar', value: 'c1' },
                                { label: 'Betala direkt', value: 'c2' },
                            ]}
                        //     value={value}
                        //     onChange={event => setValue(event.target.value)}
                        //     {...props}
                        />
                    </Box>
                    <Box>
                        <Text>Swish</Text>
                        <MaskedInput
                            mask={[
                                {
                                    length: 10,
                                    regexp: /[0-9]$/,
                                    placeholder: 'Telefonnummer',

                                }
                            ]}
                        />
                    </Box>
                </Box>
            </AccordionPanel>
        </Grommet>
    )
}
export default payment;


// IPv4MaskedInput.storyName = 'IPv4 address';

// IPv4MaskedInput.parameters = {
//   chromatic: { disable: true },
// };

// kort-nummer https://storybook.grommet.io/?path=/story/input-maskedinput-ipv4-address--i-pv-4-masked-input
// utgångsdatum https://storybook.grommet.io/?path=/story/input-maskedinput-date--date-masked-input
// lösenord / CVC https://storybook.grommet.io/?path=/story/input-textinput-password--password