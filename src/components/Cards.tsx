// Cards.tsx
import React from 'react';
import { Card, CardContent, Typography, Box, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Card.css'

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

interface CardsProps {
  product: Product;
}

const Cards: React.FC<CardsProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  }

  return (
    <Card 
      onClick={() => handleClick}
      sx={{ 
        cursor: 'pointer', 
        maxWidth: 300, 
        height: 400,
        borderRadius: '20px',
        margin: '10px',
        marginLeft: '150px',
        marginTop: '50px'
       }}
    >
      <Box sx={{ position: 'relative', p: 2, }}>
        <Box
          component="img"
          src={product.image}
          alt={product.title}
          sx={{
            width: '100%',
            height: 200,
            objectFit: 'contain',
            borderRadius: '20px',
          }}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h3">
          {product.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={product.rating?.rate || 4.5} readOnly precision={0.5} />
          <Typography variant="body2" sx={{ ml: 1 }}>
            ({product.rating?.count || 0})
          </Typography>
        </Box>
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
