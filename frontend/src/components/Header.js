import { useContext } from 'react'
import Context from './Context'
export default function Header() {
  const userData = useContext(Context);
  return (
    <nav className="nav-bar ">
      <img src={require("../assests/images/logo192.png")} height="30" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact-us">Contact</a>
        </li>
        <li>Cart: {userData.cartItems}</li>
      </ul>
    </nav>
  );
}
