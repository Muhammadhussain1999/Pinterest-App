export default function Home(){
    return(
        <>
            <h1>Homepage</h1>
            <ul className="productBox">
                <li>
                    <a href='/product/186'><img className="productImage" src={require('../assests/images/chai.jpg')} alt='coffe'/></a>
                    <a href='/product/186' className="productLink"> Shirts</a>
                </li>
                <li>
                    <a href='/product/187'><img className="productImage" src={require('../assests/images/cofffee.jpg')} alt='coffe'/></a>
                    <a href='/product/187' className="productLink"> Eat. Sleep. Code . Repeat</a>
                </li>
                <li></li>
            </ul>
        </>
    )
}