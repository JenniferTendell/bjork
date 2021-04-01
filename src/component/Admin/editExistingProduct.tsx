import { Box, Form, FormField, Text, TextInput, TextArea, Image, Layer, Button } from "grommet"
import { Close } from "grommet-icons"
import { useContext, useState } from "react"
import { AssortmentContext } from "../../contexts/assortmentContext"
import { Product } from '../mockedInterfaceProducts'


interface Props {
    chosenProduct: Product
    closeEdit: () => void
}

function EditExistingProduct(props: Props) {
    const product = props.chosenProduct

    const {
        editProductImage,
        editProductInfo,
        editProductPrice,
        editProductTitle
    } = useContext(AssortmentContext)

    const [newTitle, setNewTitle] = useState(product.title)
    const [newPrice, setNewPrice] = useState(product.price)
    const [newInfo, setNewInfo] = useState(product.info)
    const [newImage, setNewImage] = useState(product.image)

    const onSave = () => {
        console.log(newTitle)
        editProductImage(product, newImage)
        editProductInfo(product, newInfo)
        editProductPrice(product, newPrice)
        editProductTitle(product, newTitle)
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
                    height='100vh'
                    width='100%'
                    overflow='auto'
                    pad={{ 'bottom': '2rem' }}
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
                                width={{ 'max': '60%', 'min': '13rem' }}
                                height={{ 'max': '60%', 'min': '13rem' }}

                            >
                                {newImage?.length > 10 && (
                                    <Image
                                        src={newImage}
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
                                        style={{ height: '10rem' }}
                                    />
                                </FormField>
                            </Form>
                        </Box>
                    </Box>
                </Box>
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
                        label='Spara'
                        size='small'
                        onClick={() => { onSave(); props.closeEdit() }}
                    />
                </Box>
            </Box>
        </Layer>
    )
}
export default EditExistingProduct;