
import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  useMediaQuery,
  IconButton,
  Grid, BottomNavigation,
  BottomNavigationAction, Paper
} from '@mui/material';
import {
  Kitchen as KitchenIcon,
  Home as StructureIcon,
  Bathtub as BathroomIcon,
  DoorFront as DoorsIcon
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import AddIcon from '@mui/icons-material/Add';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormsBottomNavbar from '../../Users/Forms_module/FormsBottomNavbar';
import logotop from '../../Images/logo.jpg'

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const ExploreConstructionResources = () => {
  const [activeCategory, setActiveCategory] = React.useState('kitchen')
  const [selectedItemId, setSelectedItemId] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [value, setValue] = useState('construction');


  const drawerWidth = '17%';

  const categories = {
    kitchen: [
      { id: 1, title: 'Modern Kitchen', imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 2, title: 'Island Kitchen', imageUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 3, title: 'Rustic Kitchen', imageUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 4, title: 'Minimal Kitchen', imageUrl: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 5, title: 'Modern Kitchen', imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 6, title: 'Island Kitchen', imageUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 7, title: 'Rustic Kitchen', imageUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 8, title: 'Minimal Kitchen', imageUrl: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
    ],
    structure: [
      { id: 1, title: 'Modern House', imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 2, title: 'Wooden Cabin', imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 3, title: 'Brick House', imageUrl: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 4, title: 'Concrete Building', imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 5, title: 'Modern House', imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 6, title: 'Wooden Cabin', imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 7, title: 'Brick House', imageUrl: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 8, title: 'Concrete Building', imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
    ],
    bathroom: [
      { id: 1, title: 'Luxury Bathroom', imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 2, title: 'Modern Bathroom', imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 3, title: 'Small Bathroom', imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 4, title: 'Stone Bathroom', imageUrl: 'https://images.unsplash.com/photo-1566669437687-7040a6926753?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 5, title: 'Luxury Bathroom', imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 6, title: 'Modern Bathroom', imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 7, title: 'Small Bathroom', imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 8, title: 'Stone Bathroom', imageUrl: 'https://images.unsplash.com/photo-1566669437687-7040a6926753?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
    ],
    doors: [
      { id: 1, title: 'Modern Door', imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 2, title: 'Wooden Door', imageUrl: 'https://images.unsplash.com/photo-1595624871930-6e8537998592?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 3, title: 'Glass Door', imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 4, title: 'Barn Door', imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 5, title: 'Modern Door', imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 6, title: 'Wooden Door', imageUrl: 'https://images.unsplash.com/photo-1595624871930-6e8537998592?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 7, title: 'Glass Door', imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 8, title: 'Barn Door', imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
    ]
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Navigate to the corresponding route
    switch (newValue) {
      case 'home':
        navigate('/dashboard');
        break;
      case 'construction':
        navigate('/constructions');
        break;
      case 'post':
        navigate('/post');
        break;
      case 'services':
        navigate('/home-service');
        break;
      case 'profile':
        navigate('/work-detail');
        break;
      default:
        navigate('/');
    }
  };

  const rows = chunkArray(categories[activeCategory], 2);

  return (
    <>
      {/* Sticky Header Section */}

      <Box sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1200,
        bgcolor: 'background.paper',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        {/* Top Navigation Bar */}
        <Box display="flex" alignItems="center" justifyContent="space-between" p={1} sx={{
          background: 'black',
          borderBottom: '1px solid rgba(0,0,0,0.08)'
        }}>
          {/* Back Arrow - Left Side */}
          <IconButton
            onClick={() => navigate('/dashboard')}
            sx={{
              color: 'white',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          {/* Center Text - "landnest" */}
          <Typography variant="h6" component="div" sx={{
            color: 'white',
            fontWeight: 'bold',
            flexGrow: 1,
            textAlign: 'left'
          }}>
            LANDNEST
          </Typography>

          {/* Right Side Logo */}
          <Box sx={{
            width: 100,
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={logotop}
              alt="Landnest Logo"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
            />
          </Box>
        </Box>

        {/* Construction/Interior Navigation */}
        <Box sx={{
          padding: isMobile ? 1 : 0.5,
          display: 'flex',
          justifyContent: 'space-between',
          boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
        }}>
          {/* Construction - Active */}
          <Box
            component={Link}
            to="/constructions"

            sx={{
              flex: 1,
              textAlign: 'center',
              py: 2,
              textDecoration: 'none',

              background: `
           linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
           url('https://www.transparenttextures.com/patterns/cream-paper.png')
         `,
              backgroundBlendMode: 'overlay',
              borderRight: '1px solid rgba(0,0,0,0.1)',
              borderTopLeftRadius: '30px',
              boxShadow: `
           inset 0 0 15px rgba(0,0,0,0.1),
           0 2px 5px rgba(0,0,0,0.08)
         `,
              transform: 'scale(0.98)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1)',
                boxShadow: `
             inset 0 0 20px rgba(0,0,0,0.15),
             0 3px 8px rgba(0,0,0,0.15)
           `
              }
            }}>
            <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{
              fontWeight: 700,
              color: 'green',
              letterSpacing: '1px',
              textShadow: '0 1px 3px rgba(255,255,255,0.5)',
              fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
              // textTransform: 'uppercase'
            }}>
              Constructions
            </Typography>
          </Box>

          {/* Interiors - Inactive */}
          <Box
            component={Link}
            to="/interiors"
            sx={{
              flex: 1,
              textAlign: 'center',
              py: 2,
              background: `
             linear-gradient(145deg, rgb(22, 22, 22), rgb(15, 15, 15)),
             url('https://www.transparenttextures.com/patterns/dark-matter.png')
           `,
              backgroundBlendMode: 'overlay',
              textDecoration: 'none',
              borderBottomRightRadius: '30px',
              boxShadow: `
             inset 0 0 15px rgba(0,0,0,0.2),
             0 2px 5px rgba(0,0,0,0.1)
           `,
              transform: 'scale(0.98)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: `
               linear-gradient(145deg, rgb(35, 35, 35), rgb(25, 25, 25)),
               url('https://www.transparenttextures.com/patterns/dark-matter.png')
             `,
                transform: 'scale(1)',
                boxShadow: `
               inset 0 0 20px rgba(0,0,0,0.3),
               0 3px 8px rgba(0,0,0,0.2)
             `
              }
            }}
          >
            <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{
              fontWeight: 700,
              color: 'rgba(255,255,255,0.9)',
              letterSpacing: '1px',
              textShadow: '0 1px 5px rgba(0,0,0,0.7)',
              fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
              // textTransform: 'uppercase'
            }}>
              Interiors
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', height: 'calc(100vh - 112px)', overflow: 'hidden' }}>
      <Drawer
  variant="permanent"
  anchor="left"
  sx={{
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
      backgroundColor: '#e7dbc9',
      borderRight: 'none',
      borderTopLeftRadius: '40px',
      borderBottomRightRadius: '40px',
      marginTop: '155px',
      height: '67vh',
      marginLeft: '1px',
      border: '1px solid black',
    },
  }}
>
  <List dense sx={{ p: 0 }}>
    {[
      { id: 'kitchen', icon: <KitchenIcon />, label: 'Kitchen' },
      { id: 'structure', icon: <StructureIcon />, label: 'Structure' },
      { id: 'bathroom', icon: <BathroomIcon />, label: 'Bathroom' },
      { id: 'doors', icon: <DoorsIcon />, label: 'Doors' },
    ].map((item) => {
      const isSelected = activeCategory === item.id;

      return (
        <React.Fragment key={item.id}>
          <ListItem
            button
            selected={isSelected}
            onClick={() => setActiveCategory(item.id)}
            sx={{
              py: 1.5,
              flexDirection: 'column',
              backgroundColor: isSelected ? '#3A56A8' : 'transparent',
              color: isSelected ? 'white' : 'rgba(5, 4, 4, 0.7)',
              '&:hover': {
                backgroundColor: isSelected ? '#3A56A8' : '#e3f2fd',
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 'auto',
                justifyContent: 'center',
                color: isSelected ? 'white' : 'rgba(5, 4, 4, 0.7)',
                '& svg': {
                  fontSize: '1.5rem',
                },
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: '0.7rem',
                textAlign: 'center',
                fontWeight: isSelected ? '600' : '400',
                color: isSelected ? '#ffffff' : 'rgba(10, 10, 10, 0.9)',
              }}
              sx={{
                marginTop: '4px',
                '& .MuiTypography-root': {
                  display: 'block',
                },
              }}
            />
          </ListItem>
          <Divider sx={{ backgroundColor: 'rgba(9, 9, 9, 0.2)' }} />
        </React.Fragment>
      );
    })}
  </List>
</Drawer>


        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
            bgcolor: '#fff',
            pt: 2,
            pb: 10
          }}
        >
          <Typography variant="body1" align="center" sx={{ mb: 2, fontWeight: 500 }}>
            Explore Construction Resources
          </Typography>

          <Box display="flex" flexDirection="column" gap={1} marginBottom='20px'>
            {rows.map((row, rowIndex) => (
              <Box key={rowIndex} display="flex" gap={1} padding={1}>
                {row.map((item) => (
                  <Card
                    key={item.id}
                    onClick={() => setSelectedItemId(item.id)}
                    sx={{
                      width: '100%',
                      borderRadius: 2,
                      border: '0.5px solid #000',
                      boxShadow: selectedItemId == item.id ? 6 : 2,
                      cursor: 'pointer',
                      transition: '0.2s',
                      overflow: 'hidden',
                      height: '135px',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.imageUrl}
                      alt={item.title}
                      sx={{ height: 100, objectFit: 'cover' }}
                    />
                    <CardContent sx={{ padding: 1 }}>
                      <Typography variant="body2" align="center" fontWeight="500">
                        {item.title}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

 
      <FormsBottomNavbar />

    </>
  );
};

export default ExploreConstructionResources;