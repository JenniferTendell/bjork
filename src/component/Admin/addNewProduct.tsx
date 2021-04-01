import { Box, Text, Form, FormField, TextInput, TextArea, MaskedInput, Button, Layer } from "grommet"
import { Close } from "grommet-icons"


interface Props {
    closeEdit: () => void
}

function AddNewProduct(props: Props) {

    const onSave = () => {
        
    }

    return (
        <Layer>
            <Box
                width='large'
                pad='1rem'
            >
                <Box
                    width='100%'
                    align='end'
                >
                    <Close
                        onClick={props.closeEdit}
                    />
                </Box>
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
                <Box
                    direction='row'
                    width='20rem'
                    justify='between'
                    margin='2rem auto'
                    align='center'
                >
                    <Button
                        label='Avbryt'
                        size='small'
                        onClick={props.closeEdit}
                    />
                    <Button
                        label='Spara'
                        size='small'
                        onClick={() => { onSave() }}
                        onChange={onSave}
                    />
                </Box>
            </Box>
        </Layer>
    )
}

export default AddNewProduct