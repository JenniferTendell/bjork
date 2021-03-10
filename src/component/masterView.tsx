import {  Box, Grid, Grommet } from 'grommet';


function MasterView() {
    return(
        <Grommet>
            <Box // Bildspelet
                background='#C4C4C4'
                pad='medium'
                height='20rem'
            />

            <Box // Produkterna 
                background='#white'
                pad='medium'
                height='20rem'>
                    
                <Grid // Lägg in i fler rows. 
                    rows={['xxsmall', 'small']} // första värdet i row flyttar första sidan mot 0
                                                //andra värdet flyttar andra sidan mot 0, i y-led.
                    columns={['xxsmall', 'medium']} // första flyttar första hörnet i x-led mot 0,
                                                // andra värdet flyttar andra hörnet mot 0.
                    gap='small'
                    areas={[
                        { name: 'main', start: [1, 1], end: [1, 1]},
                    ]}
                    >
                    <Box gridArea='main' background='light-4' />

                </Grid>
            </Box>

        </Grommet>
    
    )

}

export default MasterView;