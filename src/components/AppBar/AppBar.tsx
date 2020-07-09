import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import './style.scss'

type AppProps = {
  title: string
}

const AppBar = ({ title }: AppProps) => {
  return (
    <Navbar bg="dark" variant="dark" className='center' data-test="appbarName">
      <Navbar.Brand aria-label="home page" href="/">{title}</Navbar.Brand>
    </Navbar>
  );
};

export default AppBar;