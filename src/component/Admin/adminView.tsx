import { Box, Text, Button } from 'grommet';
import { MouseEvent, useContext, useState } from 'react';
import { Product } from '../mockedInterfaceProducts';
import AdminAssortmentProduct from './AdminAssortmentProduct';
import { AssortmentContext } from '../../contexts/assortmentContext';
import AddNewProduct from './addNewProduct';
import EditExistingProduct from './editExistingProduct';

function AdminView() {
    const [showAddNewProduct, setShowAddNewProduct] = useState(false)
    const [showEditExistingProduct, setShowEditExistingProduct] = useState(false)
    const [chosenProduct, setChosenProduct]= useState<Product>()
    const { list } = useContext(AssortmentContext)

    const handlePageToShow = (e: MouseEvent, product?: Product) => {
        if (e.currentTarget.id === 'addNewProduct') {
            setShowAddNewProduct(true);
            setShowEditExistingProduct(false);
        } else {
            setShowAddNewProduct(false)
            setShowEditExistingProduct(true)
            setChosenProduct(product!)
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
            {showEditExistingProduct && (
                <EditExistingProduct 
                    chosenProduct = {chosenProduct!}
                    closeEdit={() => setShowEditExistingProduct(false)}
                />   
            )}
            {showAddNewProduct && (
                <AddNewProduct 
                    closeEdit={() => setShowAddNewProduct(false)}
                />   
            )}
        </main>
    );
}

export default AdminView;
