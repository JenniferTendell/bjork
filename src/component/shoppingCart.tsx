import { Box, Menu, Image, Button } from 'grommet';
import { Cart } from 'grommet-icons';
import { CSSProperties } from "react";

function ShoppingCart() {
    return (
        <Box align="center">
        <Menu style={boxBackground}
            items={[
                {
                    label: <Box style={boxSize} alignSelf="center">Kruka 299kr</Box>,
                    onClick: () => { },
                    icon: (
                        <Box height="small" width="small">
                            <Image
                                fit="cover"
                                src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
                            />
                        </Box>
                    ),
                },
                {
                    label: <Box alignSelf="center">Kruka 299kr</Box>,
                    onClick: () => { },
                    icon: (
                        <Box height="small" width="small">
                            <Image
                                fit="cover"
                                src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
                            />
                        </Box>
                    ),
                },
                {

                    onClick: () => { },
                    icon: (
                        <Box height="small" width="medium">
                            <Button color="red"
                                primary label="Gå till kassan"
                            />
                        </Box>
                    ),
                },
            ]}
        >
            <Box direction="row" gap="large" pad="medium">
                <Cart color='white' />
            </Box>
        </Menu>
    </Box>
    )
}

export const boxBackground: CSSProperties = {
    background: '#708C7E'
}

export const boxSize: CSSProperties = {
    width: '10rem',
}

export default ShoppingCart