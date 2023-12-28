export default function Header(props) {
    return (
      <nav className="nav-bar ">
        <p><img src={props.reactlogo} alt={props.logoName} height="40"/></p>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }