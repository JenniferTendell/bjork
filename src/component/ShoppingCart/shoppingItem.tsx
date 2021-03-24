import { Grid, Text, Select, Button, Box, Image } from "grommet"
import { FormTrash } from "grommet-icons"
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Product } from "../mockedInterfaceProducts"

interface Props {
    product: Product
}

function ShoppingItem(props:Props) {
    const { image, price, title } = props.product;
    const { removeProductFromCart } = useContext(CartContext)

    const removeCartProduct = () => {
        removeProductFromCart(props.product);
    }

    return(
        <Grid
            columns={['xsmall', 'xsmall', 'xsmall', 'xsmall']}
            rows={'xsmall'}
            gap={'small'} 
            align='center' 
            justify='center'
            pad={{'vertical': 'small', 'left': 'small'}} 
        >
            <Box>
                <Image 
                    fit='cover'
                    src={image}
                />
            </Box>
            <Box>
                <Text size='small'>
                    {title}
                </Text>
                <Text size='small'>
                    {price}
                </Text>
            </Box>
            <Select    
                options={['1', '2', '3', '4', '5']}
                placeholder='FIXA'
                size='small'
            />
            <Button 
                size='small'
                color='grey'
                focusIndicator={false}
                onClick={removeCartProduct}
            >
                <FormTrash />
            </Button>        
        </Grid>
    )
}

export default ShoppingItem