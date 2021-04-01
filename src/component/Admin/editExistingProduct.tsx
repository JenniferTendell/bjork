import { Box, Form, FormField, Text, TextInput, TextArea, Image } from "grommet"
import {  useEffect, useState } from "react"
import { products } from '../mockedInterfaceProducts'


interface Props {
    id: number
}

function EditExistingProduct(props: Props) {
    const product = products[props.id]

    const [newTitle, setNewTitle] = useState('')
    const [newPrice, setNewPrice] = useState(0)
    const [newInfo, setNewInfo] = useState('')
    const [newImage, setNewImage] = useState('')

    useEffect(() => {
        setNewInfo(product!.info)
        setNewPrice(product!.price)
        setNewTitle(product!.title)
        setNewImage(product!.image)
    }, [product])

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
                wrap
                width='100%'
                margin={{ 'top': '1rem' }}
                direction='row'
                justify='between'
                align='center'
            >
                <Box
                    width='15rem'
                    height='15rem'
                >
                    <Image
                        src={newImage}
                        fit='cover'
                    />
                </Box>
                <Box
                    width={{ 'min': '60%' }}
                >
                    <Form>
                        <FormField
                            label='Titel'
                        >
                            <TextInput
                                value={newTitle}
                                onChange={e => setNewTitle(e.target.value)}
                                size='small'
                            />
                        </FormField>
                        <FormField
                            label='Pris (kr)'
                        >
                            <TextInput
                                value={newPrice}
                                onChange={e => setNewPrice(parseInt(e.target.value))}
                                size='small'
                            />
                        </FormField>
                        <FormField
                            label='Bild'
                        >
                            <TextInput
                                value={newImage}
                                onChange={e => setNewImage(e.target.value)}
                                size='small'
                            />
                        </FormField>
                        <FormField
                            label='Produktbeskrivning'
                        >
                            <TextArea
                                value={newInfo}
                                onChange={e => setNewInfo(e.target.value)}
                                resize={false}
                                size='small'
                            />
                        </FormField>
                    </Form>
                </Box>
            </Box>
        </Box>
    )
}

export default EditExistingProduct