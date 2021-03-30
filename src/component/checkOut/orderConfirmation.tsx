import { Box, Button, Heading } from "grommet"
import { CSSProperties } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from '../../contexts/orderContext';
import '../../index.css';

function OrderConfirmation() {
    const { order } = useContext(OrderContext)

    const printOrderNumber = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <main>
                <Box
                    justify='center'
                    align='center'
                    direction='row'
                    pad={{'top': '3rem'}}
                    wrap
                >
                    <Box
                        background='#B5BCB0'
                        pad='xlarge'
                        round='small'
                        align="center"
                    >
                        <h1 style={logo}>BJÖRK</h1>
                    </Box>
                    <Box
                        alignSelf='center'
                        style={{ width: '25rem' }}
                        margin={{ 'left': '1rem' }}
                        wrap
                    >
                        <Heading 
                            level='4'
                            textAlign='center'
                            style={{'fontWeight': 'normal'}}
                        >
                            Tack {order.customer.fullname} för din beställning!
                        </Heading>
                        <Heading 
                            level='5'
                            textAlign='center'
                            margin={{'top': '0rem', 'bottom': '0rem'}}
                            style={{'fontWeight': 'lighter'}}    
                        >
                            Din beställning leveras med {order.deliveryOption}.
                            Ordernummer: {printOrderNumber(1000, 9999)}.
                        </Heading>
                        <Heading
                            level='5'
                            textAlign='center'
                            margin={{'vertical': '0rem'}}
                            style={{'fontWeight': 'lighter'}}
                        >
                            Orderbekräftelse har skickats till {order.customer.email}
                        </Heading>
                    </Box>
                </Box>
                <Box
                    align='center'
                    margin={{'vertical': '4rem'}}
                >
                    <Link to='/'>
                        <Button 
                            label='Fortsätt handla'
                            color='#708C7E'
                            style={{
                                'fontWeight': 'normal', 
                                'background': '#708C7E',
                                'color': 'white',
                            }}
                        />
                    </Link>
                </Box>
          
        </main>
    )
}


export const logo: CSSProperties = {
    fontWeight: 'lighter',
    fontSize: '4rem',
    color: 'white',
    textDecoration: 'none',
    marginTop: '2.5rem'
}
export default OrderConfirmation;