import "./App.css";
import Router from "./components/Router";
import Context from "./components/Context";
// import Header from "./components/Header";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import Footer from "./components/Footer";
// // import logo from './assests/images/logo192.png'
// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
function App() {
  const userInfo = {
    name: "Johnny",
    email: "codrkai@gamil.com",
    loggedIn: true,
    cartItems: 4,
  };
  //   // const Layout = () => {
  //   //       return (
  //   //         <>
  //   //           <Header />
  //   //           <Outlet />
  //   //           <Footer />
  //   //         </>
  //   //       );
  //   //     };

  //   // const style={backgroundColor:"Blue", fontSize:40}
  //   // const logo = require("./assests/images/logo192.png");
  //   // const myStyle = "red";
  return (
    //     <>
    //       {/* <BrowserRouter>
    //         <Routes>
    //           <Route path="/" element={<Layout />}>
    //             <Route path="/" element={<Home />} />
    //             <Route path="contact-us" element={<Contact />} />
    //           </Route>
    //         </Routes>
    //       </BrowserRouter> */}
    //       {/* <Header reactlogo={logo} logoName="react logo"/>
    //       <h1 className="red">HomePage</h1>
    //       <p className={myStyle}>This is the homepage</p>
    //       {/*<img src={logo} alt="logo"/>*/}
    //       {/*<img src={require('./assests/images/logo192.png')} alt="logo"/>*/}
    //       {/*<Footer/> */}
    <>
      <Context.Provider Provider value={userInfo}>
        <Router />
      </Context.Provider>
    </>
  );
}

export default App;
