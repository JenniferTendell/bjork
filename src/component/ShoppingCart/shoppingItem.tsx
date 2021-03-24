import { Grid, Text, Button, Box, Image } from "grommet"
import {  FormTrash } from "grommet-icons"
import { useContext } from "react";
import { CartContext, CartItem } from "../../contexts/CartContext";

interface Props {
    cartItem: CartItem
}

function ShoppingItem(props: Props) {
    const { image, price, title, quantity } = props.cartItem;
    const { removeProductFromCart, subQuantity, addQuantity } = useContext(CartContext)

    const removeCartProduct = () => {
        removeProductFromCart(props.cartItem);
    }

    const handleAddOnClick = () => {
        addQuantity(props.cartItem)
    }
    const handleSubOnClick = () => {
        subQuantity(props.cartItem)
    }

    return (
        <Grid
            columns={['xsmall', 'xsmall', 'xsmall', 'xsmall']}
            rows={'xsmall'}
            gap={'small'}
            align='center'
            justify='center'
            pad={{ 'vertical': 'small', 'left': 'small' }}
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
            <Box direction='row'>
                <button
                    id="add"
                    onClick={handleAddOnClick}
                >
                    +
                </button>
                <button
                    id="remove"
                    onClick={handleSubOnClick}
                >
                    -
                </button>
                <Text size='small'>Antal: {quantity}</Text>
            </Box>
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