import { Box, Image, Text, Button } from "grommet"
import { MouseEvent } from 'react';
import { Configure } from "grommet-icons"
import { Product } from "../mockedInterfaceProducts"

interface Props {
    product: Product
    openEdit: (e: MouseEvent) => void
}

function AdminAssortmentProduct(props: Props) {
    const { image, title, price } = props.product

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
                onClick={props.openEdit}
            />  
        </Box>
    )
}

export default AdminAssortmentProduct