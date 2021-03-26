import { Product } from "../mockedInterfaceProducts";
import { Box } from "grommet";
import { Link } from "react-router-dom";
import { Shop } from "grommet-icons";
import { CartContext } from "../../contexts/CartContext";
import { CSSProperties, useContext } from "react";

interface Props {
    product: Product
}

function ProductItem(props: Props) {
    const { id, title, image, price } = props.product;
    const { addToCart } = useContext(CartContext);


    const addProductToCart: React.MouseEventHandler<HTMLDivElement> = (event) => {
        // event.stopPropagation();
        event.preventDefault();
        addToCart(props.product);
    }

    return (

        <Link
            to={"/product/" + id}
            style={noTextDecoration}
        >
            <div style={rootStyle}>
                <img style={imageStyle} src={image} alt={title} />
                <div style={infoGrid}>
                    <div>
                        <h3 style={textStyle}>{title}</h3>
                        <h4 style={textStyle}>{price}kr</h4>
                    </div>
                    <Box
                        background='#708C7E'
                        round='full'
                        width='2.5rem'
                        height='2.5rem'
                        align='center'
                        justify='center'
                        onClick={addProductToCart}
                    >
                        <Shop size='18px' color='white' />
                    </Box>
                </div>
            </div>
        </Link>
    )
}

const noTextDecoration: CSSProperties = {
    textDecoration: 'none'
}

const rootStyle: CSSProperties = {
    display: 'grid',
    gridTemplateRows: '16rem 4rem',
    width: '15rem',
    margin: '.5rem'
}

const imageStyle: CSSProperties = {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    objectPosition: 'center'
}

const infoGrid: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#B5BCB0',
    color: 'white',
    padding: '0 1rem'
}

const textStyle: CSSProperties = {
    fontSize: '.8rem',
    fontWeight: 400,
    margin: '0',
}

export default ProductItem