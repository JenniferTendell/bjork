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
            height='100vh'
            width='100%'
            overflow='auto'
            pad={{'bottom': '2rem'}}
        >
            <Text
                size='xlarge'
                textAlign='center'
            >
                Redigera produkt
            </Text>
            <Box
                wrap
                margin={{ 'top': '2rem' }}
                direction='row'
                justify='center'
                align='center'
            >
                <Box
                    width='20rem'
                    align='center'
                >
                    <Box
                        width={{'max': '60%', 'min': '13rem'}}
                        height={{'max': '60%', 'min': '13rem'}}
                        
                    >
                        <Image
                            src={newImage}
                            fit='cover'
                            width='100%'
                            height='100%'
                        />
                    </Box>
                </Box>
                <Box
                    width={{'min': '50%'}}
                >
                    <Form>
                        <FormField
                            label='Titel'
                        >
                            <TextInput
                                value={newTitle}
                                onChange={e => setNewTitle(e.target.value)}
                                size='xsmall'
                            />
                        </FormField>
                        <FormField
                            label='Pris (kr)'
                        >
                            <TextInput
                                value={newPrice}
                                onChange={e => setNewPrice(parseInt(e.target.value))}
                                size='xsmall'
                            />
                        </FormField>
                        <FormField
                            label='Bild'
                        >
                            <TextInput
                                value={newImage}
                                onChange={e => setNewImage(e.target.value)}
                                size='xsmall'
                            />
                        </FormField>
                        <FormField
                            label='Produktbeskrivning'
                        >
                            <TextArea
                                value={newInfo}
                                onChange={e => setNewInfo(e.target.value)}
                                resize={false}
                                size='xsmall'
                                fill={true}
                                style={{height:'10rem'}}   
                            />
                        </FormField>
                    </Form>
                </Box>
            </Box>
        </Box>
    )
}

export default EditExistingProduct