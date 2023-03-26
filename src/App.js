import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Login from './pages/Login';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/product/:_id",
        element: <SingleProduct />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
]);

function App() {
  return (
    <div>
      
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
