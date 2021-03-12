import { Box, Carousel, Grommet } from 'grommet';
import { Component, CSSProperties } from 'react';
import { products } from '../interfaceProducts';

// const customTheme = {
//     carousel: {
//         animation: {
//             duration: 400,
//         },
//         icons: {
//             color: '#37513B',
//         },
//         disabled: {
//             color: '#708C7E'
//         }
//     }
// }

const rootImagesSize: CSSProperties = {
    width: '35rem',
    height: '30rem',
    objectFit: 'cover'
}

class TopSellers extends Component {
    static parameters: {chromatic: { disable: boolean;}; };
    render() {
        return(
            <Grommet>
                <Box align='center' pad='medium'>
                    <Carousel fill>
                        <Box align='center'>
                            <img
                                style={ rootImagesSize }
                                src={products[8]?.image} alt='' />
                        </Box>
                        <Box align='center'>
                            <img
                                style={ rootImagesSize }
                                src={products[10]?.image} alt='' />
                        </Box>
                        <Box align='center'>
                            <img
                                style={ rootImagesSize }
                                src={products[11]?.image} alt='' />
                        </Box>
                        <Box align='center'>
                            <img
                                style={ rootImagesSize }
                                src={products[6]?.image} alt='' />
                        </Box>
                    </Carousel>
                </Box>
            </Grommet>
        )
    }
}

TopSellers.parameters = {
    chromatic:  {disable: false},
};

export default TopSellers;