import { Box, Carousel, Grommet } from 'grommet';
import { Component, CSSProperties } from 'react';
import { products } from '../mockedInterfaceProducts';
import { theme } from "../theme";


class ImageCarousel extends Component {
    static parameters: { chromatic: { disable: boolean; }; };
    render() {
        return (
            <Grommet theme={theme}>
            <Box 
                pad={{'horizontal': 'large', 'vertical': 'medium'}}
                width={{'max': '70rem'}}
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
                            src={products[10]?.image}
                            alt={products[10]?.title}
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
            </Grommet>
        )
    }
}

ImageCarousel.parameters = {
    chromatic: { disable: false },
};

const rootImagesSize: CSSProperties = {
    width: '80%',
    height: '20rem',
    objectFit: 'cover',
    margin: '0 auto'
}

export default ImageCarousel;