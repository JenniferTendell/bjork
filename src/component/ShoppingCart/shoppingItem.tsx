import { Text, Button, Box } from "grommet"
import { FormTrash } from "grommet-icons"
import { CSSProperties, useContext } from "react";
import { CartContext, CartItem } from "../../contexts/CartContext";
import AmountButton from "../amountButton";

interface Props {
    cartItem: CartItem
}

function ShoppingItem(props: Props) {
    const { image, price, title } = props.cartItem;
    const { removeProductFromCart } = useContext(CartContext)

    const removeCartProduct = () => {
        removeProductFromCart(props.cartItem);
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
                <div style={{ paddingLeft: '1rem' }}>
                    <div style={productInfo}>
                        <Text size='small'>
                            {title}
                        </Text>
                        <Text size='small'>
                            {price} kr
                        </Text>
                    </div>
                </div>
                <div>
                    <AmountButton product={props.cartItem} />
                    <Button
                        size='small'
                        color='grey'
                        focusIndicator={false}
                        onClick={removeCartProduct}
                    >
                        <FormTrash />
                    </Button>
                </div>
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
    gridTemplateColumns: '4rem 1fr 1fr',
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