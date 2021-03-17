import { Form, FormField, TextInput } from "grommet";
import { MailOption } from "grommet-icons";
import { CSSProperties } from "react";


// const [name, setName] = useState('');
// const [email, setEmail] = useState('');

function DetailsForm() {
    return (

        <Form
            style={{ ...form }}
            // value={value}
            // onChange={nextValue => setValue(nextValue)}
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
            
            <FormField name="city" htmlFor="city" label="Stad">
                <TextInput id="city" name="zipccityode" />
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
