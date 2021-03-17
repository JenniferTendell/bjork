import { Box, Grid } from 'grommet';
import { Component } from 'react';
import { products } from '../interfaceProducts';
import ProductItem from '../productItem';
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
                            <ProductItem
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