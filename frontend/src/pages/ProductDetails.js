import Context from '../components/Context';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const userData = useContext(Context);
  const params = useParams();
  let ProductDetail = null;
  
  if (params.id === "187") {
    ProductDetail = {
      name: "coffee",
      price: 50.00,
      img: require('../assests/images/BestCoffee.jpg'), // Corrected the path for the image
    };
  }

  return (
    <>
      <h1>Product Details</h1>
      <p>The Product details is {params.id} </p>
      <p>Cart Items:{userData.cartItems}</p>
      {ProductDetail !== null ? (
        <>
          <img style={{ width: '100px', height: '100px' }} src={ProductDetail.img} alt={ProductDetail.name} />
          <h1>{ProductDetail.name}- {ProductDetail.price}</h1>
          
        </>
      ) : (
        ''
      )}
    </>
  );
}
