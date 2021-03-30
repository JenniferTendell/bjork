import { Box, Form, FormField, MaskedInput, TextInput } from "grommet";
import { MailOption } from "grommet-icons";
import { useContext } from "react";
import { OrderContext } from "../../contexts/orderContext";

function DetailsForm() {

    const { setCustomerField, order } = useContext(OrderContext);

    return (
        <Box >
            <Form
                id="idDetailsForm"
            >
                <FormField name="fullname" htmlFor="fullname" label="För- och efternamn" >
                    <TextInput id="fullname"
                        value={order.customer.fullname}
                        onChange={(event) => setCustomerField(event.target.value, "fullname")}
                    />
                </FormField>

                <FormField name="email" label="Email" >
                    {/* <TextInput reverse icon={<MailOption />} type="email" name="email"
                    /> */}
                    <MaskedInput
                        name="email"
                        reverse icon={<MailOption />} 
                        type="email"
                        value={order.customer.email}
                        onChange={(event) => setCustomerField(event.target.value, "email")}
                        mask={[
                            { regexp: /^[\w\-_.]+$/ },
                            { fixed: '@' },
                            { regexp: /^[\w]+$/},
                            { fixed: '.' },
                            { regexp: /^[\w]+$/},
                        ]}
                    />
                </FormField>

                <FormField name="phoneNumber" label="Telefonnummer">
                    <TextInput type="number" name="phoneNumber"
                        value={order.customer.phoneNumber}
                        onChange={(event) => setCustomerField(event.target.value, "phoneNumber")}
                    />
                </FormField>

                <FormField name="address" htmlFor="address" label="Gatuadress">
                    <TextInput id="address" name="address"
                        value={order.customer.address}
                        onChange={(event) => setCustomerField(event.target.value, "address")}
                    />
                </FormField>

                <FormField name="zipcode" htmlFor="zipcode" label="Postnummer">
                    <TextInput type="number" id="zipcode" name="zipcode"
                        value={order.customer.zipcode}
                        onChange={(event) => setCustomerField(event.target.value, "zipcode")}
                    />
                </FormField>

                <FormField name="city" htmlFor="city" label="Stad">
                    <TextInput id="city" name="city"
                        value={order.customer.city}
                        onChange={(event) => setCustomerField(event.target.value, "city")}
                    />
                </FormField>
            </Form>
        </Box>
    )
}
export default DetailsForm;