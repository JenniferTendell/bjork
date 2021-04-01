import { Text, Button } from 'grommet';
import { FormTrash } from 'grommet-icons';
import { CSSProperties, useContext } from 'react';
import { CartContext, CartItem } from '../../contexts/CartContext';
import AmountButton from '../amountButton';

interface Props {
    cartItem: CartItem;
}

function ShoppingItem(props: Props) {
    const { image, price, title } = props.cartItem;
    const { removeProductFromCart } = useContext(CartContext);

    const removeCartProduct = () => {
        removeProductFromCart(props.cartItem);
    }

    return (
        <div style={rootStyle}>
            <div style={flexContainer}>
                <div style={imageContainer}>
                    <img
                        style={imageStyle}
                        src={image}
                        alt={title}
                    />
                </div>
                <div style={productText}>
                    <Text size='small'>
                        {title}
                    </Text>
                    <Text size='small'>
                        {price} kr
                    </Text>
                </div>
            </div>
            <div style={flexContainer}>
                <div style={{ ...productButton, ...flexStart }}>
                    <AmountButton product={props.cartItem} />
                </div>
                <div style={{ ...productButton, ...flexEnd }}>
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
        </div>
    );
}

export default ShoppingItem;

const rootStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: '1rem',
    height: 'auto',
    borderBottom: '.1rem solid #B5BCB0'
}

const flexContainer: CSSProperties = {
    display: 'flex',
    flex: 1,
    maxWidth: '1fr',
    minWidth: '12rem',
}

const imageContainer: CSSProperties = {
    width: '5rem',
    height: '5rem',
    marginRight: '1rem',
}

const imageStyle: CSSProperties = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
}

const productText: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

const productButton: CSSProperties = {
    display: 'flex',
    flex: 1,
    maxWidth: '1fr',
    minWidth: '5rem',
    paddingTop: '1rem'
}

const flexEnd: CSSProperties = {
    justifyContent: 'flex-end',
}

const flexStart: CSSProperties = {
    justifyContent: 'flex-start',
}
