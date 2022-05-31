import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography component="span" align="center" variant="body2" sx={{ flexGrow: 1 }}>
            COVID DATABASE
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;