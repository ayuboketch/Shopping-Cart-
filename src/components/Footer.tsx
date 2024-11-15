import { Link } from 'react-router-dom';
import { 
  Typography,
  Button,
  Container,
  Grid,
  Box,
  TextField,
} from '@mui/material';

const Footer = () => (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container style={{ width: '100vw', maxWidth: '100vw' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are committed to providing the best shopping experience with quality products and excellent customer service.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
              <li><Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link></li>
              <li><Link to="#" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link></li>
              <li><Link to="#" style={{ color: 'white', textDecoration: 'none' }}>FAQ</Link></li>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Newsletter
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Enter your email"
              fullWidth
              sx={{
                backgroundColor: 'white',
                borderRadius: 1
              }}
            />
            <Button 
              variant="contained" 
              sx={{ mt: 2 }}
              color="secondary"
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 4, textAlign: 'center' }}>
          © {new Date().getFullYear()} E-Shop. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );

export default Footer;