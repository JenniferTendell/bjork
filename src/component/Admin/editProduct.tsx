import { Box, Button, Layer } from "grommet"
import { Close } from "grommet-icons"
import AddNewProduct from "./addNewProduct"
import EditExistingProduct from "./editExistingProduct"

interface Props {
    closeEdit: () => void
    showAddNewProduct: boolean
    chosenProductId: string
}

function EditProduct(props: Props) {
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
                            chosenProductId={props.chosenProductId}
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
                    />
                </Box>
            </Box>
        </Layer>
    )
}

export default EditProduct