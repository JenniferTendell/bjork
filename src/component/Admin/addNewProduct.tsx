import { Box, Text, Form, FormField, TextInput, TextArea } from "grommet"


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
                        <TextInput
                            name='price'
                            placeholder='Pris'
                        />
                        <TextArea
                            name='info'
                            placeholder='Produktbeskrivning'
                            resize={false}
                        />
                    </FormField>
                </Form>
            </Box>
        </Box>
    )
}

export default AddNewProduct