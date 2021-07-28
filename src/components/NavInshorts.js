import React from 'react';
import inshorts from '../assets/inshorts.png';
import { makeStyles } from '@material-ui/core';
import HamburgerDrawer from './HamburgerDrawer';

const useStyles = makeStyles({
  nav: {
    display: 'flex',
    boxShadow: '0 1px 8px #888888',
    height: '71px',
    alignItems: 'center',
    paddingLeft: '2%',
  },
  menu: {
    flex: 0.5,
  },
});

const NavInshorts = ({ setCategories }) => {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <h1 className={classes.menu}>
        <HamburgerDrawer setCategories={setCategories} />
      </h1>
      <img src={inshorts} alt='inshorts.png' width='150px' />
    </div>
  );
};
export default NavInshorts;
