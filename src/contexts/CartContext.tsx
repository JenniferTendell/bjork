import { createContext, FunctionComponent, useState } from 'react';
import { Product } from '../component/mockedInterfaceProducts';

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextValue {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeProductFromCart: (product: Product) => void;
    emptyCart: () => void;
    nrOfProducts: number;
    totalSum: number;
    addQuantity: (product: Product) => void;
    subQuantity: (product: Product) => void;
}

export const CartContext = createContext<CartContextValue>({} as CartContextValue);

const CartProvider: FunctionComponent = ({ children }) => {
    const initializeCart = () => {
        const collectedCart = localStorage.getItem('cart');
        if (collectedCart) {
            return JSON.parse(collectedCart) as CartItem[];
        }
        return [];
    }

    const getCartLength = (cartToCount: CartItem[]) => {
        let length = 0;
        cartToCount.forEach((cartItem) => {
            length += cartItem.quantity;
        });
        return length;
    }

    const addToCart = (product: Product) => {
        let cartToSave = [...cart];
        const cartItem = cart.find(cartItem => cartItem.id === product.id);

        if (cartItem) {
            cartItem.quantity++;
        } else {
            cartToSave = [...cartToSave, { ...product, quantity: 1 }];
        }

        setCart(cartToSave);
        updateCartInLocalStorage(cartToSave);
        setNrOfProducts(getCartLength(cartToSave));
        setTotalSum(getTotalSum(cartToSave));
    }

    const getTotalSum = (cart: CartItem[]) => {
        const cartPrices = [];
        let totalSum = 0;
        for (const item of cart) {
            if (item.quantity > 1) {
                const sum = item.quantity * item.price;
                cartPrices.push(sum);
            } else {
                cartPrices.push(item.price);
            }
        }

        for (const price of cartPrices) {
            totalSum += price;
        }
        return totalSum;
    }

    const updateCartInLocalStorage = (cart: CartItem[]) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const removeProductFromCart = (product: Product) => {
        let cartToSave = [...cart];
        const productIdToRemove = product.id;
        const index = cartToSave.map(item => {
            return item.id;
        }).indexOf(productIdToRemove);

        cartToSave.splice(index, 1)

        setCart(cartToSave);
        setTotalSum(getTotalSum(cartToSave));
        setNrOfProducts(getCartLength(cartToSave));
        updateCartInLocalStorage(cartToSave);
    }

    const emptyCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
        setNrOfProducts(getCartLength([]));
    }

    const addQuantity = (product: Product) => {
        let cartToSave = [...cart];
        const cartItem = cart.find(cartItem => cartItem.id === product.id);

        if (cartItem) {
            cartItem.quantity++;
        }

        setCart(cartToSave);
        updateCartInLocalStorage(cartToSave);
        setNrOfProducts(getCartLength(cartToSave));
        setTotalSum(getTotalSum(cartToSave));
    }

    const subQuantity = (product: Product) => {
        let cartToSave = [...cart];
        const cartItem = cart.find(cartItem => cartItem.id === product.id);
        const productIdToRemove = product.id;
        const index = cartToSave.map(item => {
            return item.id;
        }).indexOf(productIdToRemove);

        if (cartItem!.quantity > 1) {
            cartItem!.quantity--;
        } else {
            cartToSave.splice(index, 1);
        }

        setCart(cartToSave);
        updateCartInLocalStorage(cartToSave);
        setNrOfProducts(getCartLength(cartToSave));
        setTotalSum(getTotalSum(cartToSave));
    }

    /* HOOKS */
    const [cart, setCart] = useState<CartItem[]>(initializeCart());
    const [nrOfProducts, setNrOfProducts] = useState<number>(getCartLength(cart));
    const [totalSum, setTotalSum] = useState<number>(getTotalSum(cart));

    return (
        <CartContext.Provider value=
            {{
                cart,
                addToCart,
                removeProductFromCart,
                emptyCart,
                nrOfProducts,
                totalSum,
                addQuantity,
                subQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;