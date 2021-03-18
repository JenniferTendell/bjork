import { Grid, Text, Select, Button, Box, Image } from "grommet"
import { FormTrash } from "grommet-icons"
import { Product } from "./interfaceProducts"

interface Props {
    product: Product
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
                    src={props.product.image}
                />
            </Box>
            <Box>
                <Text size='small'>
                    {props.product.title}
                </Text>
                <Text size='small'>
                    {props.product.price}
                </Text>
            </Box>
            <Select    
                options={['1', '2', '3', '4', '5']}
                placeholder='FIXA'
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