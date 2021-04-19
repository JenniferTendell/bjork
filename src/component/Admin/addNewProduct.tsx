import { Box, Text, Form, FormField, TextInput, TextArea, Button, Layer, Image } from "grommet"
import { Close } from "grommet-icons"
import { useContext, useEffect, useState } from "react"
import { AssortmentContext } from "../../contexts/assortmentContext"
import { Product } from "../../mockedInterfaceProducts";

interface Props {
    closeEdit: () => void;
}

function AddNewProduct(props: Props) {
    const { addNewProduct, list } = useContext(AssortmentContext)

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')
    const [id, setId] = useState('')

    const newProduct: Product = {
        id: id,
        title: title,
        price: price,
        info: info,
        image: image
    }

    useEffect(() => {
        generateNewId()
    })

    const generateNewId = () => {
        const lastProductId = list.length
        const newId = lastProductId
        setId(newId.toString())
    }

    const saveNewProduct = () => {
        addNewProduct(newProduct)
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
                                width={{ 'max': '60%', 'min': '13rem' }}
                                height={{ 'max': '60%', 'min': '13rem' }}
                            >
                                { image?.length > 10 && ( 
                                    <Image
                                        src={image}
                                        fit='cover'
                                        width='100%'
                                        height='100%'
                                    />
                                )}
                            </Box>
                        </Box>
                        <Box
                            width={{ 'min': '50%' }}
                        >
                            <Form
                                id='newProduct'
                            >
                                <FormField
                                    label='Titel'
                                >
                                    <TextInput
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                        size='xsmall'
                                        required
                                    />
                                </FormField>
                                <FormField
                                    label='Pris (kr)'
                                >
                                    <TextInput
                                        value={price}
                                        onChange={e => setPrice(parseInt(e.target.value))}
                                        size='xsmall'
                                        required
                                    />
                                </FormField>
                                <FormField
                                    label='Bild'
                                >
                                    <TextInput
                                        value={image}
                                        onChange={e => setImage(e.target.value)}
                                        size='xsmall'
                                        required
                                    />
                                </FormField>
                                <FormField
                                    label='Produktbeskrivning'
                                >
                                    <TextArea
                                        value={info}
                                        onChange={e => setInfo(e.target.value)}
                                        resize={false}
                                        size='xsmall'
                                        fill={true}
                                        style={{ height: '10rem' }}
                                        required
                                    />
                                </FormField>
                            </Form>
                        </Box>
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
                        color='#708C7E'
                        style={{
                            'fontWeight': 'normal',
                            'color': 'black',
                        }}
                        label='Avbryt'
                        size='small'
                        onClick={props.closeEdit}
                    />
                    <Button
                        color='#708C7E'
                        style={{
                            'fontWeight': 'normal',
                            'background': '#708C7E',
                            'color': 'white',
                        }}
                        form='newProduct'
                        type='submit'
                        label='Spara'
                        size='small'
                        onClick={() => { saveNewProduct(); props.closeEdit() }}
                    />
                </Box>
            </Box>
        </Layer>
    );
}

export default AddNewProduct;