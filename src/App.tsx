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

// App.tsx
// import './App.css';
// import About from './components/About';
// import ProductsPage from './components/ProductsPage';
// import Root from './components/Root';
// import Signup from './components/SignUp';
// import Home from './components/Home';
// import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// // Define a custom Material-UI theme if needed
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2', // Customize the primary color
//     },
//     secondary: {
//       main: '#dc004e', // Customize the secondary color
//     },
//   },
// });

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Root />}>
//         {/* Nested routes within Root */}
//         <Route index element={<Home />} />
//         <Route path="products" element={<ProductsPage />} />
//         <Route path="products/:id" element={<ProductsPage />} />
//         <Route path="about" element={<About />} />
//         <Route path="sign-up" element={<Signup />} />
//       </Route>
//     </>
//   )
// );

// const App = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       {/* CssBaseline adds consistent global styles */}
//       <CssBaseline />
//       <RouterProvider router={router} />
//     </ThemeProvider>
//   );
// };

// export default App;

