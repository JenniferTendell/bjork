import { Component, createContext } from "react";
import { Product } from "../component/interfaceProducts";

interface State {}

interface CartContextValue extends State {
    addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextValue>({
    addToCart: () => {}
})

class CartProvider extends Component<{}, State> {

    render() {
        return (
            <CartContext.Provider value={{
                
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}