import { Box, Button, Layer } from "grommet"
import { Close } from "grommet-icons"
import { useContext } from "react"
import { AssortmentContext } from "../../contexts/assortmentContext"
import {  Product, products } from "../mockedInterfaceProducts"
import AddNewProduct from "./addNewProduct"
import EditExistingProduct from "./editExistingProduct"

interface Props {
    closeEdit: () => void
    showAddNewProduct: boolean
    chosenProductId: string
}

function EditProduct(props: Props) {
    const { addNewProduct } = useContext(AssortmentContext);
    const id = parseInt(props.chosenProductId)

    const onSave = () => {
        if (props.showAddNewProduct) {
            const product: Product = products[id]!
            addNewProduct(product);

        } else {}
    console.log('katt')
    }

    return (
        <Layer>
            <Box
                width='large'
                height='100%'
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

                {props.showAddNewProduct  
                    ?   <AddNewProduct />
                    :   <EditExistingProduct 
                            id={id}
                        />
                }
                
                <Box
                    direction='row'
                    width='medium'
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
                        onClick={() => {onSave()}} 
                        onChange={onSave}
                    />
                </Box>
            </Box>
        </Layer>
    )
}

export default EditProduct;