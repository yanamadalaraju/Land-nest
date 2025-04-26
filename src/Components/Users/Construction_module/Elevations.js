import React, { useEffect, useState } from 'react';
import {
  Box, Card, CardMedia, CardContent, Typography, IconButton, Grid,
  useMediaQuery, useTheme, BottomNavigation,
    BottomNavigationAction,   Paper
} from '@mui/material';
import pic1 from '../../Images/rear.jpg';
import pic2 from '../../Images/renovation.png';
import pic3 from '../../Images/sideelevation.jpg';
import pic4 from '../../Images/3d elevation.jpg';
import pic5 from '../../Images/modern.jpg';
import pic6 from '../../Images/traditional.jpg';
import pic7 from '../../Images/contemperory.jpg';
import pic8 from '../../Images/mimalastic.jpg';
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

const data = [
  {
    id: 1,
    title: 'Front Elevation',
    image: pic1
  },
  {
    id: 2,
    title: 'Rear Elevation',
    image: pic2
  },
  {
    id: 3,
    title: 'Side Elevation',
    image: pic3
  },
  {
    id: 4,
    title: '3D Elevation',
    image: pic4
  },
  {
    id: 5,
    title: 'Modern Design',
    image: pic5
  },
  {
    id: 6,
    title: 'Traditional Design',
    image: pic6
  },
  {
    id: 7,
    title: 'Contemporary Design',
    image: pic7
  },
  {
    id: 8,
    title: 'Minimalist Design',
    image: pic8
  }
];

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const Elevations = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const rows = chunkArray(data, 2);

   const [value, setValue] = useState('construction');
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
           onClick={() => navigate(-1)}
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

      {/* Page Title */}
     

      {/* Content Cards */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2, 
        px: 2,
        pb: 15,
        mt: 2,
        backgroundColor: '#e7dbc9'

      }}>

<Typography
        variant="h5"
        align="center"
        fontWeight="bold"
        sx={{
          mt: 3,
          fontSize: isMobile ? '1.5rem' : '2rem'
        }}
      >
        Elevations
      </Typography>
        {rows.map((row, rowIndex) => (
          <Box
            key={rowIndex}
            display="flex"
            gap={2}
          >
            {row.map((item) => (
              <Card
                key={item.id}
                sx={{ 
                  flex: 1,
                  borderRadius: 2,
                  boxShadow: 3,
                  height:'160px',

                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="120"
                  image={item.image}
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ padding: '8px' }}>
                  <Typography variant="subtitle1" align="center" fontWeight="bold">
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        ))}
      </Box>
 <FormsBottomNavbar />
                
    </>
  );
};

export default Elevations;