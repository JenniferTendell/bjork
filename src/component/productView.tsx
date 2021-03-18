import { Box, Button, Grid, Image, Select, Text } from 'grommet';
import { Link } from 'react-router-dom';
import {  products } from '../component/interfaceProducts';


function ProductView() {
    const urlPath = window.location.pathname
    const productId = Number(urlPath.split('/')[2])


    return (
        <main>
            <Grid
                columns={['medium', 'medium']}
                rows={['xxsmall', 'xsmall', 'xsmall', 'small']}
                gap='small'
                areas={[
                    { name: 'goBack', start: [0, 0], end: [0, 0] },
                    { name: 'image', start: [0, 1], end: [0, 3] },
                    { name: 'mainInfo', start: [1, 1], end: [1, 1] },
                    { name: 'info', start: [1, 2], end: [1, 2] },
                    { name: 'buyButton', start: [1, 3], end: [1, 3] }
                ]}
                pad='large'
                justifyContent='center'
            >
                <Box>
                    <Link to="/">
                        <Text>
                            Tillbaka
                        </Text>
                    </Link>
                </Box>
                <Box
                    pad={{'right': 'medium'}}
                    gridArea='image'
                >
                    <Image
                        
                        src={products[productId]?.image}
                        fit='cover'
                    />
                </Box>
                <Box
                    gridArea='mainInfo'
                    justify='center'
                >
                    <Text
                        size='xlarge'
                    >
                        {products[productId]?.title}
                    </Text>
                    <Text>
                        {products[productId]?.price}kr
                    </Text>
                </Box>
                <Box
                    gridArea='info'
                >
                    <Text
                        size='small'
                    >
                        {products[productId]?.info}
                    </Text>
                </Box>
                <Box
                    gridArea='buyButton'
                >
                    <Select 
                        options={['1', '2', '3', '4', '5']}
                        a11yTitle={'Välj antal'} // Screen readers
                        placeholder='Välj antal'
                        size='small'
                        margin={{'horizontal': 'large'}}
                    />
                    <Button
                        label='Lägg i kundvagn'
                        a11yTitle='Lägg i kundvagn' // Screen readers
                        color='#708C7E' 
                        margin={{'top': 'medium'}}
                        size='small'
                    />
                </Box>
            </Grid>
        </main>
    )
}

export default ProductView