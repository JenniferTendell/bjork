import { Box, Text, Button } from "grommet"
import { MouseEvent, useContext, useState } from "react"
import { Product } from "../mockedInterfaceProducts"
import EditProduct from "./editProduct"
import AdminAssortmentProduct from "./AdminAssortmentProduct"
import { AssortmentContext } from "../../contexts/assortmentContext"


function AdminView() {
    const [editProduct, setEditProduct] = useState(false)
    const [showAddNewProduct, setShowAddNewProduct] = useState(false)
    const [chosenProductId, setChosenProductId] = useState('')
    const { list } = useContext(AssortmentContext)

    const handlePageToShow = (e: MouseEvent, product?: Product) => {
        setEditProduct(true)
        
        if (e.currentTarget.id === 'addNewProduct') {
            setShowAddNewProduct(true)
        } else {
            setShowAddNewProduct(false)
            setChosenProductId(product!.id)
        }
    }
    
    return (
        <main>
            <Box
                width='100%'
                align='center'
            >
                <Text size='large'>
                    Admin
                </Text>
            </Box>
            <Box
                width='8rem'
                margin={{ 'left': '10%' }}
            >
                <Button
                    id='addNewProduct'
                    size='small'
                    label='Lägg till'
                    onClick={handlePageToShow}
                />
            </Box>
            <Box
                width='80%'
                margin='2rem auto'
                border={{ 'side': 'top' }}
            >
                {list.map((product, index) =>
                    <AdminAssortmentProduct
                        product={product}
                        openEdit={handlePageToShow}
                        key={index}
                    />
                )}
            </Box>
            {editProduct && (
                <EditProduct
                    closeEdit={() => setEditProduct(false)}
                    showAddNewProduct={showAddNewProduct} 
                    chosenProductId={chosenProductId} 
                />
            )}
        </main>
    )
}

export default AdminView
