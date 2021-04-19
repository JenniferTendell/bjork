import { Box, Text } from 'grommet';
import { CSSProperties, useContext } from 'react';
import {CartContext } from '../contexts/CartContext';
import { Product } from '../mockedInterfaceProducts';
interface Props {
    product: Product;
}

function AmountButton({ product }: Props) {
    const { subQuantity, addQuantity, cart } = useContext(CartContext);
    const cartItem = cart.find(i => i.id === product.id);
    if (!cartItem) return null;

    return (
        <Box direction='row' align='center'>
            <button
                style={buttonStyle}
                id='remove'
                onClick={() => subQuantity(product)}
            >
                -
            </button>
            <Text 
                size='small'
                margin={{'horizontal': 'small'}}
            >
                {cartItem.quantity}
            </Text>
            <button
                style={buttonStyle}
                id='add'
                onClick={() => addQuantity(product)}
            >
                +
            </button>
        </Box>
    );
}

export default AmountButton;

const buttonStyle: CSSProperties = {
    width: '1.3rem',
    height: '1.3rem',
    borderRadius: '50%',
    backgroundColor: '#B5BCB0',
    color: '#37513B',
    border: 'none',
    outline: 'none',
}
