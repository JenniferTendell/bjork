import { Box, Text, Button } from "grommet"
import { MouseEvent, useState } from "react"
import { products } from "../mockedInterfaceProducts"
import EditProduct from "./editProduct"
import AdminAssortmentProduct from "./AdminAssortmentProduct"


function AdminView() {
    const [editProduct, setEditProduct] = useState(false)
    const [showAddNewProduct, setShowAddNewProduct] = useState(false)

    const handlePageToShow = (e: MouseEvent) => {
        setEditProduct(true)
        
        if (e.currentTarget.id === 'addNewProduct') {
            setShowAddNewProduct(true)
        } else {
            setShowAddNewProduct(false)
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
                {products.map((product, index) =>
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
                />
            )}
        </main>
    )
}

export default AdminView
