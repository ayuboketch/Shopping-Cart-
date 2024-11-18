import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Grid,
  Box,
  Rating,
  Chip,
  IconButton
} from '@mui/material';
import {
  ShoppingCart,
  FavoriteBorder
} from '@mui/icons-material';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const handleClick = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  const categories = [...new Set(products.map(product => product.category))];
  const onSaleProducts = products.slice(0, 4);
  const favoriteProducts = products.slice(4, 8);

  interface ProductCardProps {
    product: Product;
    showSaleBadge: boolean;
  }

  const ProductCard: React.FC<ProductCardProps> = ({ product, showSaleBadge }) => (
    <Card onClick={() => handleClick(product)} sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', '&:hover': { boxShadow: 6 } }}>
      <Box sx={{ position: 'relative' }}>
        {showSaleBadge && (
          <Chip
            label="Sale"
            color="error"
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
            }}
          />
        )}
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            left: 8,
          }}
        >
          <FavoriteBorder />
        </IconButton>
        <Box
          component="img"
          src={product.image}
          alt={product.title}
          sx={{
            width: '100%',
            height: 200,
            objectFit: 'contain',
            p: 2
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          gutterBottom
          variant="h6"
          component="h3"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            minHeight: '64px'
          }}
        >
          {product.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={product.rating?.rate || 4.5} readOnly precision={0.5} />
          <Typography variant="body2" sx={{ ml: 1 }}>
            ({product.rating?.rate || 4.5})
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
          <Typography variant="h6" component="p">
            ${product.price}
          </Typography>
          <IconButton color="primary">
            <ShoppingCart />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Typography variant="h4">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth={false}
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100dvw',
    }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          height: '400px',
          width: '90dvw',
          mb: 8,
          mt: 4,
          borderRadius: 2,
          background: 'linear-gradient(45deg, #2196F3 30%, #9C27B0 90%)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          px: 4,
          color: 'white',
        }}
      >
        <Box>
          <Typography variant="h2" component="h1" sx={{ mb: 2, width: '90dvw' }}>
            Summer Sale
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Up to 50% off on selected items
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': {
                bgcolor: '#f5f5f5'
              }
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>

      {/* Categories Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 4, width: '90dvw', }}>
          Shop by Category
        </Typography>
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={6} md={3} key={category}>
              <Card
                sx={{
                  p: 3,
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: 6
                  }
                }}
              >
                <Typography variant="h6" component="h3" sx={{ textTransform: 'capitalize' }}>
                  {category}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* On Sale Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
          On Sale
        </Typography>
        <Grid container spacing={3}>
          {onSaleProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard product={product} showSaleBadge={true} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Favorites Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
          Popular Items
        </Typography>
        <Grid container spacing={3}>
          {favoriteProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard product={product} showSaleBadge={false} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
