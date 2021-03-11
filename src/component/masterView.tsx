import {  Box, Grid, Grommet } from 'grommet';
import { Component } from 'react';
import { products } from './interfaceProducts';
import ProductItem from './productItem';

class MasterView extends Component {
    render() {
        return(
            <Grommet>
                <Box // Bildspelet
                    background='#C4C4C4'
                    pad='medium'
                    height='20rem'
                />
    
                <Box // Produkterna 
                    background='#white'
                    pad='medium'
                    height='20rem'
                    >
                    <Grid // Lägg in i fler rows. 
                        rows={['medium', 'medium']} // första värdet i row flyttar första sidan mot 0
                        //andra värdet flyttar andra sidan mot 0, i y-led.
                        columns={['medium', 'medium']} // första flyttar första hörnet i x-led mot 0,
                        // andra värdet flyttar andra hörnet mot 0.
                        gap='small'
                    >

                        {products.map((product) =>
                            <ProductItem product={product} />
                        )}


                        <Box  
                            direction='column'
                            background='light-4' 
                            /> 
                    </Grid>
                </Box>

            </Grommet>
        );
    }
}



export default MasterView;