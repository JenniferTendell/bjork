import { Box, Button, Text } from 'grommet';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import ShoppingItem from './shoppingItem';


function ShoppingCart() {
    const { cart } = useContext(CartContext);
    let totalSum: number = 0;


    const getTotalSum = (totalSum: number) => {

        const cartPrices = [];
        
        for (const item of cart) {
            if (item.quantity > 1) {
                const sum = item.quantity * item.price;
                cartPrices.push(sum);
            } else {
                cartPrices.push(item.price)
            }
        }
        
        for (const price of cartPrices) {
            totalSum += price
        }
        return totalSum;
    }
    

    return (
        <Box
            margin={{ 'top': 'small' }}
        >
            <Text alignSelf='center'>
                Kundvagn
            </Text>
            {cart.map((cartItem, index) =>
                <ShoppingItem
                    product={cartItem}
                    key={index}
                />
            )}
            <Box
                direction='row'
                justify='around'
                background='#B5BCB0'
                pad={{ 'vertical': 'small' }}
            >
                <Text>
                    Total:
                </Text>
                <Text>
                    {getTotalSum(totalSum)} kr
                </Text>
            </Box>
            <Button
                label='Gå till kassan'
                size='small'
                margin={'small'}
                color='#708C7E'
                alignSelf='center'
                href='/checkOut'
            />
        </Box>
    )
}

export default ShoppingCart;