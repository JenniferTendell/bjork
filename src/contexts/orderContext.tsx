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

interface CardDetails {
    cardNumber?: string
    expireDate?: string
    cvcCode?: string
}

// info that exists in an order
interface Order {
    cartItems?: CartItem[];
    customer: Customer;
    deliveryOption?: string;
    paymentMethod?: string;
    cardDetails?: CardDetails;
}

interface OrderContextValue {
    order: Order;
    setCustomerField: (defaultValue: string, field: keyof Customer) => void;
    setDeliveryOptionField: (value: string) => void; 
    setPaymentMethodField: (value: string) => void; 
    setCardField: (defaultValue: string, field: keyof CardDetails) => void;
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
    const [paymentMethod, setPaymentMethod] = useState<string>('');
    const [cardDetails, setCardDetails] = useState<CardDetails>({});
    
    const setCustomerField = (value: string, field: keyof Customer) => {
        const clonedCustomer = { ...customer };
        clonedCustomer[field] = value;
        setCustomer(clonedCustomer);
        console.log(clonedCustomer);
    };

    const setDeliveryOptionField = (value: string) => {
        const choosenDelivery = value;
        setDeliveryOption(choosenDelivery);
        console.log(choosenDelivery)
    };

    const setPaymentMethodField = (value: string) => {
        const chosenPayment = value;
        setPaymentMethod(chosenPayment);
        console.log(chosenPayment)
    };
    
    const setCardField = (value: string, field: keyof CardDetails) => {
        const clonedCardDetails = {...cardDetails}; 
        clonedCardDetails[field]= value;
        setCardDetails(clonedCardDetails);
        console.log(clonedCardDetails)
    }
    
    return (
        <OrderContext.Provider value={{
            order: {
                customer,
                deliveryOption,
                paymentMethod,
                cardDetails
            },
            setCustomerField,
            setDeliveryOptionField,
            setPaymentMethodField,
            setCardField,
        }}>
            {children}
        </OrderContext.Provider>
    )
}
export default OrderProvider;