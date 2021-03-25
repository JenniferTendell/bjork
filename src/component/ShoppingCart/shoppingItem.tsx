import { Text, Button, Box } from "grommet"
import { FormTrash } from "grommet-icons"
import { CSSProperties, useContext } from "react";
import { CartContext, CartItem } from "../../contexts/CartContext";

interface Props {
    cartItem: CartItem
}

function ShoppingItem(props: Props) {
    const { image, price, title, quantity } = props.cartItem;
    const { removeProductFromCart, subQuantity, addQuantity } = useContext(CartContext)

    const removeCartProduct = () => {
        removeProductFromCart(props.cartItem);
    }

    const handleAddOnClick = () => {
        addQuantity(props.cartItem)
    }
    const handleSubOnClick = () => {
        subQuantity(props.cartItem)
    }

    return (
        <Box
            width='100%'
            margin={{ 'bottom': 'medium' }}
        >
            <div style={rootStyle}>
                <img
                    style={imageStyle}
                    src={image}
                    alt={title}
                />
                <div style={{paddingLeft: '1rem'}}>
                    <div style={productInfo}>
                        <Text size='small'>
                            {title}
                        </Text>
                        <Text size='small'>
                            {price} kr
                    </Text>
                    </div>
                    <Box direction='row'>
                        <button
                            id="add"
                            onClick={handleAddOnClick}
                        >
                            +
                        </button>
                        <button
                            id="remove"
                            onClick={handleSubOnClick}
                        >
                            -
                        </button>
                        <Text size='small'>Antal: {quantity}</Text>
                    </Box>
                </div>
                <Button
                    size='small'
                    color='grey'
                    focusIndicator={false}
                    onClick={removeCartProduct}
                >
                    <FormTrash />
                </Button>
            </div>
            <Box
                border={{ 
                    'color': '#B5BCB0', 
                    'size': 'xsmall', 
                    'style': 'solid', 
                    'side': 'bottom' 
                }}
                margin={{ 'top': 'medium' }}
            />
        </Box>
    )
}

const rootStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '4rem 1fr 2rem',
    gridTemplateRows: '4rem',
    alignItems: 'center',
}



const imageStyle: CSSProperties = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    objectPosition: 'center',
}

const productInfo: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
}

export default ShoppingItem