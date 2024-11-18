import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Typography,
  Button,
  Container,
  Box,
  Rating,
  Grid
} from '@mui/material';
import {  
  ShoppingCart,
  FavoriteBorder
} from '@mui/icons-material';

// Define the structure of the product data
interface Product {
  name?: string;
  price?: number;
  id: string | number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data: Product) => { // Specify the type of data fetched
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setError("Failed to load product details. Please try again later."); // Set error message
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Typography variant="h4">Loading...</Typography>
      </Box>
    );
  }

  if (error) { // Display error message if there's an error
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', borderRadius: '10px', padding: '20px' }}>
        <Typography variant="h6" color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ 
      py: 4, 
      width: '100dvw', 
      height: '70dvh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={product?.image}
            alt={product?.title}
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: 500,
              objectFit: 'contain',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            {product?.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={product?.rating?.rate || 4.5} readOnly precision={0.5} />
            <Typography variant="body2" sx={{ ml: 1 }}>
              ({product?.rating?.count || 0} reviews)
            </Typography>
          </Box>
          <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
            ${product?.price}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {product?.description}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" startIcon={<ShoppingCart />} size="large">
              Add to Cart
            </Button>
            <Button variant="outlined" startIcon={<FavoriteBorder />} size="large">
              Add to Wishlist
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailsPage;