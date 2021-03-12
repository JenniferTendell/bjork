import { Box, Grid, Text } from "grommet";
import { Facebook, Instagram, Pinterest } from 'grommet-icons';


function Footer() {
    return (
        <Box
            background='#708C7E;'
            align='center'
            height='small'
            margin={{ 'top': 'small' }}
        >
            <Grid
                columns={['small', 'small', 'small']}
                rows={['xsmall']}
                gap='small'
            >
                <Box
                    direction='column'
                    justify='start'
                    align='center'
                    pad={{ 'top': 'large' }}
                >
                    <Text
                        size='medium'
                        color='white'
                        weight={400}
                    >
                        30 Dagars öppet köp
                    </Text>
                    <Text
                        size='xsmall'
                        color='white'
                        weight={300}
                        textAlign='center'
                        margin={{ 'top': 'xsmall' }}
                    >
                        Du som kund har alltid 30 dagars öppet köp.
                    </Text>
                </Box>
                <Box
                    direction='column'
                    justify='start'
                    align='center'
                    pad={{ 'top': 'large' }}
                >
                    <Text
                        size='medium'
                        color='white'
                        weight={400}
                    >
                        Kontakt
                    </Text>
                    <Text
                        size='xsmall'
                        color='white'
                        weight={300}
                        margin={{ 'top': 'xsmall' }}
                    >
                        Mail: order@bjork.se
                    </Text>
                </Box>
                <Box
                    direction='column'
                    justify='start'
                    align='center'
                    pad={{ 'top': 'large' }}
                    color='white'
                >
                    <Text
                        size='medium'
                        color='white'
                        weight={400}
                    >
                        Följ oss på:
                    </Text>
                    <Box
                        direction='row'
                        fill='horizontal'
                        justify='evenly'
                        pad='medium'
                    >
                        <Instagram color='white' size='medium' />
                        <Facebook color='white' size='medium' />
                        <Pinterest color='white' size='medium' />
                    </Box>
                </Box>
            </Grid>
        </Box>
    )
}

export default Footer