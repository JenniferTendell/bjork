import { Box, Grid, Grommet } from 'grommet';
import { Component } from 'react';
import { products } from './interfaceProducts';
import ProductItem from './productItem';

class MasterView extends Component {
    render() {
        return (
            <Grommet>
                <Box // Bildspelet
                    background='#C4C4C4'
                    pad='medium'
                    height='20rem'
                />
                    <Grid
                        rows={
                            ["small", "..."]
                        }
                        columns={
                            { "count": "fit", "size": "medium" }
                        }
                        gap='small'
                    >
                        {products.map((product, index) =>
                            <ProductItem product={product}
                                key={index} />
                        )}
                    </Grid>
            </Grommet>
        );
    }
}



export default MasterView;