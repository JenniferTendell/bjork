import { createContext, FunctionComponent, useState } from "react";
import { CartItem } from "./CartContext";

interface Customer {
    fullname: string
    email: string 
    phoneNumber: string
    address: string
    zipcode: string
    city: string
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
    setCustomerField: (defaultValue: string, field: keyof Customer) => void;
    setDeliveryOptionField: (value: string) => void; 
    setPaymentMethodField: (value: string) => void; 
}

export const OrderContext = createContext<OrderContextValue>({} as any)

const OrderProvider: FunctionComponent = ({ children }) => {
    const [customer, setCustomer] = useState<Customer>({ 
        fullname: '',
        email: '', 
        phoneNumber: '',
        address: '',
        zipcode: '',
        city: '', 
    });
    const [deliveryOption, setDeliveryOption] = useState<string>('');
    const [paymentMethod, setPaymentMethod] = useState<string>('')
    
    const setCustomerField = (value: string, field: keyof Customer) => {
        const clonedCustomer = { ...customer };
        clonedCustomer[field] = value;
        setCustomer(clonedCustomer);
        console.log(clonedCustomer)
    }

    const setDeliveryOptionField = (value: string) => {
        const choosenDelivery = value
        setDeliveryOption(choosenDelivery)
    }

    const setPaymentMethodField = (value: string) => {
        const chosenPayment = value
        setPaymentMethod(chosenPayment);
    }
    
    return (
        <OrderContext.Provider value={{
            order: {
                customer,
                deliveryOption,
                paymentMethod,
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