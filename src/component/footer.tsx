import { Box, Text } from "grommet";
import { Facebook, Instagram, Pinterest } from 'grommet-icons';
import { CSSProperties } from "react";


function Footer() {
    return (
        <footer>
            <Box
                background='#708C7E;'
                align='center'
                height='flex'
                pad={{ 'vertical': 'large' }}
            >
                <div style={grid}>
                    <Box
                        direction='column'
                        align='center'
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
                        align='center'
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
                        align='center'
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
                            pad={{ 'top': 'small', 'horizontal': 'medium' }}
                        >
                            <Instagram color='white' size='medium' />
                            <Facebook color='white' size='medium' />
                            <Pinterest color='white' size='medium' />
                        </Box>
                    </Box>
                </div>
            </Box>
        </footer>
    )
}

const grid: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
    rowGap: '2rem',
    width: '80%',
}

export default Footer