import { Box, Button, Text } from 'grommet';
import { Close } from 'grommet-icons';
import { MouseEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import ShoppingItem from './shoppingItem';

interface Props {
    closeCart: (e: MouseEvent) => void
}

function ShoppingCart(props: Props) {
    const { cart, totalSum } = useContext(CartContext);

    return (
        <Box
            margin={{ 'top': 'medium' }}
            height='100vh'
            width='flex'
        >
            <Box
                direction='row'
                justify='between'
                margin={{ 'horizontal': 'small' }}
                height='xsmall'
            >
                <Close
                    color='#37513B'
                    onClick={props.closeCart}
                />
                <Text color='#37513B' margin={{ 'right': '1.5rem' }}>
                    Kundvagn
                    </Text>
                <Box />
            </Box>
            <Box
                overflow='auto'
                pad={{ 'horizontal': '5%' }}
                width='100%'
                height='large'
            >
                {cart.map((cartItem, index) =>
                    <ShoppingItem
                        cartItem={cartItem}
                        key={index}
                    />
                )}
                {cart.length < 1 && (
                    <Box
                        margin={{ 'horizontal': 'large' }}
                        align='center'
                    >
                        <Text
                            textAlign='center'
                            margin={{ 'top': 'large' }}
                            size='small'
                        >
                            Din kundvagn är tom
                            </Text>
                    </Box>
                )}
            </Box>

            <Box
                basis='medium'
            >
                <Box
                    direction='row'
                    justify='around'
                    background='#B5BCB0'
                    pad={{ 'vertical': 'small' }}
                >
                    <Text color='#37513B'>
                        Total:
                        </Text>
                    <Text color='#37513B'>
                        {totalSum} kr
                        </Text>
                </Box>
                <Box
                    width='100%'
                    alignSelf='center'
                    align='center'
                    pad='1rem'
                >
                    <Link to='/checkOut'>
                        <Button
                            label='Gå till kassan'
                            size='small'
                            color='#37513B'
                            onClick={props.closeCart}
                            disabled={cart.length < 1}
                        />
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default ShoppingCart;