import { Box, Button, Layer, Text } from 'grommet';
import ShoppingCart from './shoppingCart';
import { Cart } from 'grommet-icons';
import { useContext, useState, MouseEvent } from 'react';
import { CartContext } from '../../contexts/CartContext';

function ShoppingCartButton() {
    const [showCart, setShowCart] = useState(false);
    const { nrOfProducts } = useContext(CartContext);

    function onCloseCart(e: MouseEvent) {
        e.stopPropagation();
        setShowCart(false);
    }

    return (
        <Button
            onClick={() => setShowCart(true)}
        >
            <Box direction='row'>
                <Cart color='white' />
                {nrOfProducts > 0 && (
                    <Box
                        round='small'
                        height='1.3rem'
                        width='1.3rem'
                        background='#37513B'
                        justify='center'
                        margin={{ 'left': '-0.3rem', 'top': '1rem' }}
                    >
                        <Text
                            textAlign='center'
                            size='xsmall'
                            weight='bold'
                        >
                            {nrOfProducts}
                        </Text>
                    </Box>
                )}
            </Box>
            {showCart && (
                <Layer
                    onClickOutside={() => setShowCart(false)}
                    position='right'
                >
                    <ShoppingCart closeCart={onCloseCart} />
                </Layer>
            )}
        </Button>
    );
}

export default ShoppingCartButton;