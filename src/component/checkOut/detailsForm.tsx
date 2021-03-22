import { Form, FormField, TextInput } from "grommet";
import { MailOption } from "grommet-icons";
import { CSSProperties, useContext } from "react";
import { OrderContext } from "../../contexts/orderContext";

function DetailsForm() {

    const { setCustomerField, order } = useContext(OrderContext);
    // const { setFullname, setEmail, setAddress } = useContext(OrderContext);

    return (
        <Form
            style={{ ...form }}
            // value={value}
            // onChange={nextValue => setValue(nextValue)}
            // onChange={value => console.log('Change', value)}
        >
            <FormField name="fullname" htmlFor="fullname" label="För- och efternamn">
                <TextInput required id="fullname" 
                    value={order.customer.fullname}
                    onChange={(event) => setCustomerField(event.target.value, "fullname") } 
                />
            </FormField>

            <FormField name="email" label="Email"  required>
                <TextInput reverse icon={<MailOption />}  type="email" name="email"
                    value={order.customer.email}
                    onChange={(event) => setCustomerField(event.target.value, "email") } 
                />
            </FormField>

            <FormField name="phoneNumber" label="Telefonnummer">
                <TextInput type="number" name="phoneNumber"
                    value={order.customer.phoneNumber}
                    onChange={(event) => setCustomerField(event.target.value, "phoneNumber") } 
                />
            </FormField>

            <FormField name="address" htmlFor="address" label="Gatuadress">
                <TextInput id="address" name="address" 
                    value={order.customer.address}
                    onChange={(event) => setCustomerField(event.target.value, "address") }
                />
            </FormField>

            <FormField name="zipcode" htmlFor="zipcode" label="Postnummer">
                <TextInput type="number" id="zipcode" name="zipcode" 
                    value={order.customer.zipcode}
                    onChange={(event) => setCustomerField(event.target.value, "zipcode") }
                />
            </FormField>
            
            <FormField name="city" htmlFor="city" label="Stad">
                <TextInput id="city" name="city" 
                    value={order.customer.city}
                    onChange={(event) => setCustomerField(event.target.value, "city") }
                />
            </FormField>
        </Form>
    )
}
export default DetailsForm; 

const form: CSSProperties = {
    padding: '1rem',
    width: '50%',
}
// olika utseende beroende på om required sätts i FormField eller i Textinput