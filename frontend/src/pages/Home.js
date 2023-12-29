export default function Home(){
    return(
        <>
            <h1>Homepage</h1>
            <ul className="productBox">
                <li>
                    <a href='/'><img className="productImage" src={require('../assests/images/chai.jpg')} alt='coffe'/></a>
                    <a href='/' className="productLink"> Shirts</a>
                </li>
                <li>
                    <a href='/'><img className="productImage" src={require('../assests/images/cofffee.jpg')} alt='coffe'/></a>
                    <a href='/' className="productLink"> Eat. Sleep. Code . Repeat</a>
                </li>
                <li></li>
            </ul>
        </>
    )
}