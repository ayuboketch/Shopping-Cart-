import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem
} from '@mui/material';
import { 
  Favorite, 
  ShoppingCart,
  Menu as MenuIcon,
  Person,
} from '@mui/icons-material';

// Navbar Component
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" >
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography 
          variant="h6" 
          component={Link} 
          to="/"
          sx={{ 
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
            textAlign: 'left'
          }}
        >
          E-Shop
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/products">
            Products
          </Button>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={2} color="error">
              <Favorite />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={handleMenu}>
            <Person />
          </IconButton>
        </Box>

        <Drawer
          anchor="left"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
          <List sx={{ width: 250 }}>
          <ListItem component={Link} to="/" onClick={() => setMobileMenuOpen(false)} button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component={Link} to="/products" onClick={() => setMobileMenuOpen(false)} button>
            <ListItemText primary="Products" />
          </ListItem>
        </List>


        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My Orders</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;