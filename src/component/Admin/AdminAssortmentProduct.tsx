import { Box, Image, Text, Button } from "grommet"
import { MouseEvent, useContext } from 'react';
import { Configure, FormTrash } from "grommet-icons"
import { Product } from "../mockedInterfaceProducts"
import { AssortmentContext } from "../../contexts/assortmentContext";

interface Props {
    product: Product
    openEdit: (e: MouseEvent, product: Product) => void
}

function AdminAssortmentProduct(props: Props) {
    const { image, title, price } = props.product;
    const { removeProduct } = useContext(AssortmentContext)

    const handleClick = () => {
        removeProduct(props.product);
    }

    return (
        <Box
            direction='row'
            margin='1rem 0'
            align='center'
            justify='between'
        >
            <Box
                direction='row'
            >
                <Box
                    margin={{ 'right': '2rem' }}
                    height='xsmall'
                    width='xsmall'
                >
                    <Image
                        fit='cover'
                        src={image}
                    />
                </Box>
                <Box
                    justify='center'
                >
                    <Text>
                        {title}
                    </Text>
                    <Text>
                        {price} kr
                </Text>
                </Box>
            </Box>
            <Button
                id='editExistingProduct'
                icon={<Configure />}
                onClick={(e) => props.openEdit(e, props.product)}
            />  
            <Button
                size='small'
                color='grey'
                focusIndicator={false}
                icon={<FormTrash />}
                onClick={handleClick}
            >
           
            </Button>
        </Box>
    )
}

export default AdminAssortmentProduct