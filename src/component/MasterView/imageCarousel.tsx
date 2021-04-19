import { Box, Carousel } from 'grommet';
import { Component, CSSProperties } from 'react';
import { products } from '../../mockedInterfaceProducts';

class ImageCarousel extends Component {
    static parameters: { chromatic: { disable: boolean; } };
    render() {
        return (
            <Box
                pad={{ 'horizontal': 'large', 'vertical': 'medium' }}
                width={{ 'max': '70rem' }}
                margin={'0 auto'}
            >
                <Carousel fill>
                    <Box>
                        <img
                            style={rootImagesSize}
                            src={products[8]?.image}
                            alt={products[8]?.title}
                        />
                    </Box>
                    <Box>
                        <img
                            style={rootImagesSize}
                            src={products[15]?.image}
                            alt={products[15]?.title}
                        />
                    </Box>
                    <Box>
                        <img
                            style={rootImagesSize}
                            src={products[11]?.image}
                            alt={products[11]?.title}
                        />
                    </Box>
                    <Box>
                        <img
                            style={rootImagesSize}
                            src={products[6]?.image}
                            alt={products[6]?.title}
                        />
                    </Box>
                </Carousel>
            </Box>
        );
    }
}

export default ImageCarousel;

const rootImagesSize: CSSProperties = {
    width: '80%',
    height: '25rem',
    objectFit: 'cover',
    margin: '0 auto'
}
