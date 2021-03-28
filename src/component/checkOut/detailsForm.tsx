import { Box, Form, FormField, TextInput } from "grommet";
import { MailOption } from "grommet-icons";
import { useContext } from "react";
import { OrderContext } from "../../contexts/orderContext";

// interface FieldInput {
//     name: string,
//     htmlFor: string,
//     label: string,
//     id: string,
//     type: string,
// }

function DetailsForm() {

    const { setCustomerField, order } = useContext(OrderContext);

    // const fieldInputs: FieldInput[] = [
    //     {
    //         name: 'fullname',
    //         htmlFor: 'fullname',
    //         label: 'För- och efternamn',
    //         id: 'fullname',
    //         type: 'text', 
    //     },
    //     {
    //         name: 'email',
    //         htmlFor: 'email',
    //         label: 'Email',
    //         id: 'email',
    //         type: 'email', 
    //     },
    // ]

    return (
        <Box pad='large' >
            <Form
                id="idDetailsForm"
            >
                {/* {fieldInputs.map((fieldInput, index) => 
                <FormField key={index}
                    name={fieldInput.name}
                    htmlFor={fieldInput.htmlFor}
                    label={fieldInput.label}
                >
                    <TextInput 
                        id={fieldInput.id}
                        value={order.customer.({...fieldInput.name}) }
                        onChange={(event) => setCustomerField(event.target.value, {fieldInput.id})}
                    />
                </FormField>
            )} */}
                <FormField name="fullname" htmlFor="fullname" label="För- och efternamn" >
                    <TextInput id="fullname"
                        value={order.customer.fullname}
                        onChange={(event) => setCustomerField(event.target.value, "fullname")}
                    />
                </FormField>

                <FormField name="email" label="Email" >
                    <TextInput reverse icon={<MailOption />} type="email" name="email"
                        value={order.customer.email}
                        onChange={(event) => setCustomerField(event.target.value, "email")}
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

// olika utseende beroende på om required sätts i FormField eller i Textinput