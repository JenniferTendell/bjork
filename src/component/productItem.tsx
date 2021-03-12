import { Product } from "./interfaceProducts";
import './CSS/productItem.css';
import { Box } from "grommet";


interface Props {
    product: Product
}

function ProductItem(props: Props) {
    const { title, image } = props.product;

    return (
        <Box direction='column' >
            <img className='image-size' src={image} alt=""  />
            <Box height='xsmall' width='large' className='text-box'>
                <a href={image}>
                    <h2>{title}</h2>
                </a>
            </Box>
        </Box>

    )
}

export default ProductItem