import { Box, Button, Text } from 'grommet';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import ShoppingItem from './shoppingItem';


function ShoppingCart() {
    const { cart } = useContext(CartContext)

    return (
        <Box
            margin={{'top': 'small'}}
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
                pad={{'vertical': 'small'}}
            >
                <Text>
                    
                </Text>
                <Text>
                    299kr
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

export default ShoppingCart