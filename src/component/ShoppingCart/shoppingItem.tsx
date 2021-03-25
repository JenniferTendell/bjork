import { Grid, Text, Button, Box, Image } from "grommet"
import {  FormTrash } from "grommet-icons"
import { useContext } from "react";
import { CartContext, CartItem } from "../../contexts/CartContext";
import AmountButton from "../amountButton";

interface Props {
    cartItem: CartItem
}


function ShoppingItem(props: Props) {
    const { image, price, title } = props.cartItem;
    const { removeProductFromCart } = useContext(CartContext)

    const removeCartProduct = () => {
        removeProductFromCart(props.cartItem);
    }

    return (
        <Grid
            columns={['xsmall', '.5fr', '1fr', '.5fr']}
            rows={'xsmall'}
            gap={'small'}
            align='center'
            justify='center'
            pad={{ 'vertical': 'small', 'left': 'small' }}
        >
            <Box
                height='100%'
            >
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
            <AmountButton product={props.cartItem} />
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