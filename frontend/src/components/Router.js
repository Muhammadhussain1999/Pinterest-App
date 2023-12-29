import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
// import logo from './assests/images/logo192.png'
//import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

export default function Router() {
    const Layout = () => {
      return (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      );
    };
  //   const BrowserRoutes=()=>{
  //     return(
  //     <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route path="/" element={<Home />} />
  //         <Route path="contact-us" element={<Contact />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>)
  //   }

  //Second version of routing
  const BrowserRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "contact-us",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route path="/" element={<Home />} />
    //       <Route path="contact-us" element={<Contact />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={BrowserRoutes} />
  );
}
