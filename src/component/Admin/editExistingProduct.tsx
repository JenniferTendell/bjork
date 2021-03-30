import { Box, Form, FormField, Text, TextInput, TextArea } from "grommet"
import {products} from '../mockedInterfaceProducts'

interface Props {
    chosenProductId: string
}


function EditExistingProduct(props: Props) {
    const id = parseInt(props.chosenProductId)
    const product = products[id]

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
                            placeholder={product?.title}
                        />
                        <TextInput
                            name='price'
                            placeholder={product?.price + ' kr'}
                        />
                        <TextArea
                            name='info'
                            placeholder={product?.info}
                            resize={false}
                        />
                    </FormField>
                </Form>
            </Box>
        </Box>
    )
}

export default EditExistingProduct