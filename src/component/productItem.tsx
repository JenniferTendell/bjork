import { Product } from "./interfaceProducts"

interface Props {
    product: Product
}

function ProductItem(props: Props) {
    const { title, image } = props.product; 

    return(
        <div>
            <h2>{title}</h2>
            <img src={image} alt="" />
        </div>
    )
}

export default ProductItem