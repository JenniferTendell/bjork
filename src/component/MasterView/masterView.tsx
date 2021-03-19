import { Box, Grid } from 'grommet';
import { Component } from 'react';
import { products } from '../mockedInterfaceProducts';
import ProductCard from './productCard';
import TopSellers from './topSellers';

class MasterView extends Component {
    render() {
        return (
            <main>
                <TopSellers />
                <Box
                    margin={{'horizontal': 'xlarge'}}
                    pad={{'vertical': 'large'}}
                >
                    <Grid
                        rows={["medium", "..."]}
                        columns={{ "count": "fit", "size": "small" }}
                        gap='medium'
                        margin='0'
                    >
                        {products.map((product, index) =>
                            <ProductCard
                                product={product}
                                key={index}
                            />
                        )}
                    </Grid>
                </Box>
            </main>
        );
    }
}



export default MasterView;