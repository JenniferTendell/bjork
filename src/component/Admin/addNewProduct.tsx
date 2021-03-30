import { Box, Text, Form, FormField, TextInput, TextArea, MaskedInput } from "grommet"


function AddNewProduct() {
    return (
        <Box
            height='100%'
            justify='between'
        >
            <Text
                size='large'
                textAlign='center'
            >
                Skapa produkt
            </Text>
            <Box
                width='100%'
                margin={{ 'top': '1rem' }}
            >
                <Form>
                    <FormField>
                        <TextInput
                            name='title'
                            placeholder='Titel'
                        />
                    </FormField>

                    <FormField>
                        <TextInput
                            name='price'
                            placeholder='Pris'
                            type='number'
                        />
                    </FormField>

                    <FormField>
                        <TextArea
                            name='info'
                            placeholder='Produktbeskrivning'
                        // resize={false}
                        />
                    </FormField>

                    <FormField>
                        <MaskedInput
                            mask={[{ fixed: 'https://' }, { regexp: /^.*$/ }]}
                        // value={value}
                        // onChange={event => setValue(event.target.value)}
                        />
                    </FormField>
                </Form>
            </Box>
        </Box >
    )
}

export default AddNewProduct