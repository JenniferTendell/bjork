import {  Grid, Grommet } from 'grommet';
import { Component } from 'react';
import { products } from '../interfaceProducts';
import ProductItem from '../productItem';
import TopSellers from './topSellers';

class MasterView extends Component {
    render() {
        return (
            <Grommet>
                <TopSellers />
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