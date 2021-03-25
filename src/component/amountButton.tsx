import { Box, Text } from "grommet";
import { useContext } from "react";
import {CartContext } from "../contexts/CartContext";
import { Product } from "./mockedInterfaceProducts";

interface Props {
    product: Product
}

function AmountButton({ product }: Props) {
    const { subQuantity, addQuantity, cart } = useContext(CartContext)
    const cartItem = cart.find(i => i.id === product.id)

    if (!cartItem) return null;

    return (
        <Box direction='row'>
            <button
                id="add"
                onClick={() => addQuantity(product)}
            >
                +
            </button>
            <button
                id="remove"
                onClick={() => subQuantity(product)}
            >
                -
            </button>
            <Text size='small'>Antal: {cartItem.quantity}</Text>
        </Box>
    )
}

export default AmountButton;