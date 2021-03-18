import {  createContext, FunctionComponent, useState } from "react";
import { Product } from "../component/interfaceProducts";


interface CartContextValue {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeProductFromCart: (product: Product) => void;
    emptyCart: () => void;
}

export const CartContext = createContext<CartContextValue>({} as any)

const CartProvider: FunctionComponent = ({children}) => {
     const [cart, setCart] = useState<Product[]>([]);

     const addToCart = (product: Product) => {
         setCart([...cart, product])
     }
     const removeProductFromCart = () => {}
     const emptyCart = () => setCart([])
     
     console.log(cart)
        return (
            <CartContext.Provider value={{
                cart,
                addToCart,
                removeProductFromCart,
                emptyCart
            }}>
                {children}
            </CartContext.Provider>
        )
}

export default CartProvider;