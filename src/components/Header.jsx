import React from 'react';
import "./Header.css";
import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { CryptoState } from '../ContextApi';
import logoimg from '../assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import DehazeIcon from '@mui/icons-material/Dehaze';

const Header = () => {

  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();

  // const darkTheme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#fff",
  //     },
  //     type: "dark",
  //   },
  // });

  return (
    // <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <div className='logo'>
            <img src={logoimg} alt='' />
            {/* {logoimg} */}
          </div>
          <Typography
            onClick={() => navigate('/')}
            className="head"
            style={{}}
            variant="h6">
            Crypto Tracker
          </Typography>
          <div className='search'>
          <SearchIcon/>
          <DehazeIcon/>
            {/* {logoimg} */}
          </div>

          {/* <Select variant='outlined'
            style={{
              width: 100,
              height: 40,
              marginRight: 15,
              color: 'white'
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select> */}
        </Toolbar>
      </Container>
    </AppBar>
    //  </ThemeProvider>
  )
}

export default Header