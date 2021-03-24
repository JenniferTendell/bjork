import { AccordionPanel, Box, MaskedInput, RadioButtonGroup, grommet, Grommet, RadioButton } from "grommet";
import { deepMerge } from "grommet/utils";
import { CSSProperties, useContext } from "react";
import { OrderContext } from "../../contexts/orderContext";

// const month: number; new Date(2021, month, 0).getDate(); // hämtar så man får val när man trycker

function Payment() {

    const { setPaymentMethodField, setCardField, order } = useContext(OrderContext);

    //för kortnummer 
    const IPv4ElementExp = /^[0-1][0-9][0-9]$|[0-4][0-9]$|[0-5]$|[0-9][0-9]$|^[0-9]$/;

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
            },
        },
    });

    return (
        <Grommet theme={theme}>
            <AccordionPanel label="Betalning">

                <Box background="light-2" style={{ height: 'large' }}>
                    <Box margin='small'>
                        <RadioButton
                            label="Kort"
                            name="Kort"
                            value='Kort'
                            checked={order.paymentMethod === 'Kort'}
                            onChange={(event) => setPaymentMethodField(event.target.value)}
                        />

                        {order.paymentMethod === "Kort" && (
                            <Box style={{ ...payBox }}>
                                <Box pad='small'>
                                    <MaskedInput
                                        onChange={(event) => setCardField(event.target.value, "cardNumber")}
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
                                    />
                                </Box>

                                <Box pad='small'>
                                    <MaskedInput
                                        onChange={(event) => setCardField(event.target.value, "expireDate")}
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
                                    />
                                </Box>

                                <Box pad='small'>
                                    <MaskedInput
                                        onChange={(event) => setCardField(event.target.value, "cvcCode")}
                                        mask={[
                                            {
                                                length: 3,
                                                regexp: /[0-9]$/,
                                                placeholder: 'CVC',
                                            }
                                        ]}
                                    />
                                </Box>
                            </Box>
                        )}
                    </Box>

                    <Box margin='small'>
                        <RadioButton
                            label="Klarna"
                            name="name"
                            value="Klarna"
                            checked={order.paymentMethod === 'Klarna'}
                            onChange={(event) => setPaymentMethodField(event.target.value)}
                        />
                        {order.paymentMethod === "Klarna" && (
                            <Box style={{ ...payBox }}>
                                <RadioButtonGroup
                                    name="radio"
                                    options={[
                                        { label: 'Faktura 14 dagar', value: 'c1' },
                                        { label: 'Betala direkt', value: 'c2' },
                                    ]}
                                />
                            </Box>
                        )}
                    </Box>

                    <Box margin='small'>
                        <RadioButton
                            label="Swish"
                            name="name"
                            value="Swish"
                            checked={order.paymentMethod === 'Swish'}
                            onChange={(event: any) => setPaymentMethodField(event.target.value)}
                        />
                        {order.paymentMethod === "Swish" && (
                            <Box style={{ ...payBox }}>
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
                        )}
                    </Box>
                </Box>
            </AccordionPanel>
        </Grommet>
    )
}
export default Payment;

const payBox: CSSProperties = {
    background: '#B5BCB0',
    padding: '1rem',
    borderRadius: '1rem',
}

// IPv4MaskedInput.storyName = 'IPv4 address';

// IPv4MaskedInput.parameters = {
//   chromatic: { disable: true },
// };

// kort-nummer https://storybook.grommet.io/?path=/story/input-maskedinput-ipv4-address--i-pv-4-masked-input
// utgångsdatum https://storybook.grommet.io/?path=/story/input-maskedinput-date--date-masked-input
// lösenord / CVC https://storybook.grommet.io/?path=/story/input-textinput-password--password