import { CSSProperties, useContext } from 'react';
import { Button, Select, Text, Grommet } from 'grommet';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import {  products } from './mockedInterfaceProducts';
import {  theme } from "./theme";


function ProductView() {
    const { addToCart } = useContext(CartContext)
    
    const urlPath = window.location.pathname
    const productId = Number(urlPath.split('/')[2])
    const product = products[productId]!

    const addProductToCart = () => {
        addToCart(product);
    }

    return (
        <Grommet theme={theme}>
        <main style={rootStyle}>
            <div>
                <Link to="/">
                    <Text
                        color='#37513B'
                    >
                        Tillbaka
                    </Text>
                </Link>
            </div>
            <div style={contentStyle}>
                <div style={imageContainer}>
                    <img
                        style={imageStyle}
                        src={product.image}
                        alt={product.title}
                    />
                </div>
                <div style={productInfoContainer}>
                    <div style={mainInfoStyle}>
                        <Text
                            size='xlarge'
                            color='#37513B'
                        >
                            {product.title}
                        </Text>
                        <Text
                            color='#37513B'
                        >
                            {product.price}kr
                        </Text>
                    </div>
                    <div>
                        <Text
                            size='small'
                            color='#37513B'
                        >
                            {product.info}
                        </Text>
                    </div>
                    <div style={buySectionStyle}>
                        <Select
                            options={['1', '2', '3', '4', '5']}
                            placeholder='Välj antal'
                            size='small'
                            margin={{ 'horizontal': 'large' }}
                        />
                        <Button
                            label='Lägg i kundvagn'
                            color='#708C7E'
                            margin={{ 'top': 'medium' }}
                            size='small'
                            onClick={addProductToCart}
                        />
                    </div>
                </div>
            </div>
        </main>
        </Grommet>
    )
}

const rootStyle: CSSProperties = {
    margin: '2rem'
}

const contentStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '2rem',
}

const imageContainer: CSSProperties = {
    display: 'flex',
    minWidth: '15rem',
    maxWidth: '20rem',
    margin: '0 2rem 1rem 2rem'
}

const imageStyle: CSSProperties = {
    objectFit: 'cover',
    width: '100%',
    objectPosition: 'center',
}

const productInfoContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '20rem'
}

const mainInfoStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10%'
}

const buySectionStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20%'
}

export default ProductView