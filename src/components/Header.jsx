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

  return (
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <div className='logo'>
            <img src={logoimg} alt='' />
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
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header