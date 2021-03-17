import { Grid, Text, Select, Button, Box, Image } from "grommet"
import { FormTrash } from "grommet-icons"

interface Props {
    cartItem: string
}

function ShoppingItem(props:Props) {
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
                    src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
                />
            </Box>
            <Box>
                <Text size='small'>
                    {props.cartItem}
                </Text>
                <Text size='small'>
                    Pris
                </Text>
            </Box>
            <Select    
                options={['1', '2', '3', '4', '5']}
                placeholder='Fixa'
                size='small'
            />
            <Button 
                size='small'
                color='grey'
                focusIndicator={false}
            >
                <FormTrash />
            </Button>        
        </Grid>
    )
}

export default ShoppingItem