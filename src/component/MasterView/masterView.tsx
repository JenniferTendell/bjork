import { CSSProperties, useContext } from 'react';
import ProductCard from './productCard';
import ImageCarousel from './imageCarousel';
import { AssortmentContext } from '../../contexts/assortmentContext';

function MasterView() {
    const { list } = useContext(AssortmentContext)

    return (
        <main>
            <ImageCarousel />
            <div style={grid}>
                {list.map((product, index) =>
                    <ProductCard
                        product={product}
                        key={index}
                    />
                )}
            </div>
        </main>
    );
}

const grid: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '80%',
    margin: '0 auto'
}

export default MasterView;