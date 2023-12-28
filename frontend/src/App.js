import "./App.css";
import Header from "./components/Header"
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
// import logo from './assests/images/logo192.png'


function App() {
  // const style={backgroundColor:"Blue", fontSize:40}
  const logo= require('./assests/images/logo192.png')
  const myStyle="red"
  return (
    <>
      <Header reactlogo={logo} logoName="react logo"/>
      <h1 className="red">HomePage</h1>
      <p className={myStyle}>This is the homepage</p>
      {/*<img src={logo} alt="logo"/>*/}
      {/*<img src={require('./assests/images/logo192.png')} alt="logo"/>*/}

      <Footer/>
    </>
  );
}

export default App;
