import { Box, Text } from 'grommet';
import { Facebook, HostMaintenance, Instagram, Pinterest } from 'grommet-icons';
import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const scrollToTopOfPage = () => {
        window.scrollTo(0, 0);
    }

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
                            Admin
                        </Text>
                        <Link
                            to='/admin'
                            style={noTextDecoration}
                        >
                            <Box
                                border={{ color: 'white', size: 'xsmall' }}
                                round='.5rem'
                                direction='row'
                                width='8rem'
                                justify='between'
                                pad={'.5rem'}
                                margin={{ 'top': '.5rem' }}
                                onClick={scrollToTopOfPage}
                            >
                                <HostMaintenance
                                    color='white'
                                />
                                <Text
                                    color='white'
                                    size='small'
                                >
                                    Redigera
                                </Text>
                            </Box>
                        </Link>
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
    );
}

export default Footer;

const grid: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
    rowGap: '2rem',
    width: '80%',
}

const noTextDecoration: CSSProperties = {
    textDecoration: 'none'
}
