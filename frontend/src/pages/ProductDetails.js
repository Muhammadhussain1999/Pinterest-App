import { useParams } from "react-router-dom"
export default function ProductDetails(){
    const params=useParams()
    let ProductDetail=null;
    if(params.id==="187"){
        ProductDetail ={
            name:"coffee",
            price:50.00,
            img:require('../assests/images/BestCoffee.jpg')
        }
    }

    return (
        <>
            <h1>Product Details</h1>
            <p>The Product details is {params.id} </p>
            {
                ProductDetail != null?
                <>
                    <img style={{width:'100px', height:'100px'}} src={ProductDetail.img} alt={ProductDetail.name}/>
                    <h1>{ProductDetail.name}- {ProductDetail.price}</h1>
                </>
                : ''
            }
        </>
    )
}