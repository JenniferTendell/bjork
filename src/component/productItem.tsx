import { Product } from "./interfaceProducts";
import { Box, Image, Text } from "grommet";
import { Link } from "react-router-dom";
import { Shop } from "grommet-icons";

interface Props {
    product: Product
}

function ProductItem(props: Props) {
    const { id, title, image, price } = props.product;

    const addProductToCart: React.MouseEventHandler<HTMLDivElement> = (event) => {
        // event.stopPropagation();
        event.preventDefault();
    }

    return (
        <Link to={"/product/" + id}>
            <Box
                height='medium'
                width='medium'
            >
                <Image
                    fit='cover'
                    src={image}
                />
                <Box
                    height='4rem'
                    width='large'
                    background='#B5BCB0'
                    pad={'small'}
                    justify='between'
                    align='center'
                    direction='row'
                >
                    <Box>
                        <Text 
                        color='#37513B'
                        weight={500}
                        >
                            {title}
                        </Text>
                        <Text 
                        color='#37513B'
                        size='small'
                        >
                            {price} kr
                    </Text>
                    </Box>
                    <Box
                        background='#708C7E'
                        width='2.5rem'
                        height='2.5rem'
                        justify='center'
                        align='center'
                        round='full'
                        onClick={addProductToCart}
                    >
                        <Shop size='18px' color='white'/>
                    </Box>
                </Box>
            </Box>
        </Link>
    )
}


export default ProductItem