// import { create } from "node:domain";
import { createContext, FunctionComponent, useState } from "react";
import { CartItem } from "./CartContext";

interface Customer {
    fullname?: string
    email?: string
    phoneNumber?: string
    address?: string
    zipcode?: string
    city?: string
}

// info that exists in an order
interface Order {
    cartItems?: CartItem[];
    customer: Customer;
    deliveryOption?: string;
    paymentMethod?: string;
}

interface OrderContextValue {
    order: Order;
    setCustomerField: (value: string, field: keyof Customer) => void;
    setDeliveryOptionField: (value: string) => void; 
    setPaymentMethodField?: (value: string) => void; 
}

export const OrderContext = createContext<OrderContextValue>({} as any)

const OrderProvider: FunctionComponent = ({ children }) => {
    const [customer, setCustomer] = useState<Customer>({});
    const [deliveryOption, setDeliveryOption] = useState({});
    const [paymentMethod, setPaymentMethod] = useState({})
    
    const setCustomerField = (value: string, field: keyof Customer) => {
        const clonedCustomer = { ...customer };
        clonedCustomer[field] = value;
        setCustomer(clonedCustomer);
    }

    const setDeliveryOptionField = (value: any) => {
        let clonedDeliveryOption = {deliveryOption};
        clonedDeliveryOption = value; // HÄR ÄR DET FEL 
        setDeliveryOption(clonedDeliveryOption);
    }

    const setPaymentMethodField = (value: any) => {
        let clonedPaymentMethod = {paymentMethod};
        clonedPaymentMethod = value;
        setPaymentMethod(clonedPaymentMethod);
    }

    return (
        <OrderContext.Provider value={{
            order: {
                customer
            },
            setCustomerField,
            setDeliveryOptionField,
            setPaymentMethodField,
        }}>
            {children}
        </OrderContext.Provider>
    )
}
export default OrderProvider;