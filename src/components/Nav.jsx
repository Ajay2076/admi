import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Home } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const drawerWidth = 240;

const Main= styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  // transition: theme.transitions.create(['margin', 'width'], {
  //   easing: theme.transitions.easing.sharp,
  //   duration: theme.transitions.duration.leavingScreen,
  // }),
  // ...(open && {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: `${drawerWidth}px`,
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // }),
}));

const DrawerHeader = styled('article')(({ theme }) => ({
  display: 'block',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
  justifyContent: 'space-around',
}));

export default function Nav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
   
   

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
        <IconButton
    size="medium"
    edge="start"
    color='inherit'
    aria-label="open drawer"
    sx={{ mr: 4 }}
    component={Link}
    
    to="/"
  >
    <HomeIcon/>
  </IconButton><br></br><br></br><br></br><br></br>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 5, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="feFuncA" style={{marginLeft:'300px'}}>
          ROYELL CHEFF
          </Typography>&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant='contained' color='success'  style={{marginLeft:'400px'}}component={Link} to='/Login'>
            Login
          </Button>&nbsp;&nbsp;
          <Button variant='contained' color='error' component={Link} to='/Signup'>
            Signup
          </Button>&nbsp;&nbsp;
          <Button variant='contained'><Link to='/Ud'style={{textDecoration:"none",color:"sandybrown"}}>update</Link></Button>&nbsp;&nbsp;
          <Button variant='contained'><Link to='/Detalis'style={{textDecoration:"none",color:"sandybrown"}}>Detalis</Link></Button>
        </Toolbar>
      </AppBar>
    
      <Drawer
        // sx={{
        //   width: drawerWidth,
        //   flexShrink: 0,
        //   '& .MuiDrawer-paper': {
        //     width: drawerWidth,
        //     boxSizing: 'border-box',
        //   },
        // }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === '<' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Today Offer', 'Special Offer', 'Today special Menu', 'Category'].map((text, index) => (
            // <ListItem key={text} disablePadding>
              <ListItemButton>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItemButton>
            // </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       
      </Main>
    </Box>


  );
}
