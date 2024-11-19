// App.tsx
import './App.css';
import About from './components/About';
// import Cards from './components/Cards';
import ProductsPage from './components/ProductsPage';
import Root from './components/Root';
import Signup from './components/SignUp';
import Home from './components/Home';
import ProductDetailsPage from './components/ProductDetailsPage';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// import { Box } from '@mui/material';

// Define the router with a standalone Home route and nested routes under Root
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        {/* Nested routes within Root */}
        <Route index element={<Home />} /> {/* This will render Home at the root ("/") */}
        <Route path="products" element={<ProductsPage />} />
        {/* <Route path="products/:id" element={<ProductDetailsPage />} /> */}
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="about" element={<About />} />
        <Route path="sign-up" element={<Signup />} />
      </Route>
    </>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;