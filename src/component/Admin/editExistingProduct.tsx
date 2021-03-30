import { Box, Form, FormField, Text, TextInput, TextArea } from "grommet"
//import { Product } from "../mockedInterfaceProducts";
/*
interface Props {
    product: Product
}
*/

function EditExistingProduct() {
    return (
        <Box
            height='100%'
            justify='between'
        >
            <Text
                size='large'
                textAlign='center'
            >
                Redigera produkt
            </Text>
            <Box
                width='100%'
                margin={{ 'top': '1rem' }}
            >
                <Form>
                    <FormField>
                        <TextInput
                            name='title'
                            //placeholder={props.product.title}
                        />
                        <TextInput
                            name='price'
                            //placeholder={props.product.price + ' kr'}
                        />
                        <TextArea
                            name='info'
                            //placeholder={props.product.info}
                            resize={false}
                        />
                    </FormField>
                </Form>
            </Box>
        </Box>
    )
}

export default EditExistingProduct