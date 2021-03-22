import { Component, CSSProperties } from 'react';
import { products } from '../interfaceProducts';
import ProductItem from '../productItem';
import ImageCarousel from './imageCarousel';

class MasterView extends Component {
    render() {
        return (
            <main>
                <ImageCarousel />
                <div style={grid}>
                    {products.map((product, index) =>
                        <ProductItem
                            product={product}
                            key={index}
                        />
                    )}
                </div>
            </main>
        );
    }
}

const grid: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '80%',
    margin: '0 auto'
}


export default MasterView;