import { Box, Button, Text } from 'grommet';
import ShoppingItem from './shoppingItem';


function ShoppingCart() {
    let cartItems = ['hej', 'på' ]

    return (
        <Box
            margin={{'top': 'small'}}
        >
            <Text alignSelf='center'>
                Kundvagn
            </Text>
             {cartItems.map((cartItem, index) =>
                <ShoppingItem  
                    cartItem={cartItem}
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
                    Totalsumma:
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