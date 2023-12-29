export default function Header() {
    return (
      <nav className="nav-bar ">
        <img src={require('../assests/images/logo192.png')} height="30"/>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="contact-us">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }