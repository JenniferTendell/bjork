import { createContext, FunctionComponent, useEffect, useState } from "react";
import { Product, products } from "../component/mockedInterfaceProducts";


interface AssortmentValue {
    list: Product[];
    addNewProduct: (product: Product) => void;
    removeProduct: (product: Product) => void;
    editProductTitle: (product: Product, title: string) => void; 
    editProductPrice: (product: Product, price: number) => void;
    editProductInfo: (product: Product, info: string) => void;
    editProductImage: (product: Product, image: string) => void;
}

export const AssortmentContext = createContext<AssortmentValue>({} as any);

const getAssortment = () => {
    const assortmentInLS = localStorage.getItem('assortment')
    if (assortmentInLS) {
        return JSON.parse(assortmentInLS)
    } else {
        return products;
    }
    
}

const AssortmentProvider: FunctionComponent = ({ children }) => {
    const [list, setList] = useState<Product[]>(getAssortment())
    console.log(list)

    useEffect(() => {
        localStorage.setItem('assortment', JSON.stringify(list));
    }, [list]);

    const removeProduct = (product: Product) => {
        const clonedList = [...list]
        console.log(clonedList)
        const productIdToRemove = product.id;
        const index = clonedList.map(item => {
            return item.id
        }).indexOf(productIdToRemove)        
        clonedList.splice(index, 1);
        setList(clonedList);
    }    

    const editProductTitle = (product: Product, title: string) => {
        const clonedList = [...list]
        const productId = product.id;
        const index = clonedList.map(item => {
            return item.title
        }).indexOf(productId);

        clonedList[index]!.title = title
        setList(clonedList); 
    }

    const editProductPrice = (product: Product, price: number) => {
        const clonedList = [...list]
        const productId = product.id;
        const index = clonedList.map(item => {
            return item.price.toString()
        }).indexOf(productId);

        clonedList[index]!.price = price
        setList(clonedList); 
    }

    const editProductInfo = (product: Product, info: string) => {
        const clonedList = [...list]
        const productId = product.id;
        const index = clonedList.map(item => {
            return item.info
        }).indexOf(productId);

        clonedList[index]!.info = info
        setList(clonedList); 
    }

    const editProductImage = (product: Product, image: string) => {
        const clonedList = [...list]
        const productId = product.id;
        const index = clonedList.map(item => {
            return item.image
        }).indexOf(productId);

        clonedList[index]!.image = image
        setList(clonedList); 
    }

    const addNewProduct = (product: Product) => {
        const clonedList = [...list]
        setList([...clonedList, product])
    }

    return (
        <AssortmentContext.Provider 
        value={{
            list,
            addNewProduct,
            removeProduct,
            editProductImage,
            editProductInfo,
            editProductPrice,
            editProductTitle
        }}>
            {children}
        </AssortmentContext.Provider>
    )
}

export default AssortmentProvider;