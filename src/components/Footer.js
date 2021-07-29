import React from 'react';
import { makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagramSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
  footer: {
    width: '100%',
    marginRight: '0',
    marginLeft: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-evenly',
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    padding: '20px 30px 15px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  iconContainer: {
    width: '60%',
    marginRight: 'auto',
    marginLeft: 'auto',
    height: '50px',
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  horizontal: {
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    color: 'white',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <footer className={`${classes.footer}`}>
        <h1 className={classes.text}>
          Inshorts clone made by -{' '}
          <a
            href='https://www.linkedin.com/in/omisakin-tunji-252744117'
            className={classes.link}
          >
            Olatunji Omisakin
          </a>
        </h1>
        <hr className={classes.horizontal} />
        <div className={classes.iconContainer}>
          <a
            href='https://www.instagram.com/olatunjiomisakin/'
            className={classes.link}
          >
            <FontAwesomeIcon icon={faInstagramSquare} size='2x' />
          </a>
          <a
            href='https://www.linkedin.com/in/omisakin-tunji-252744117'
            className={classes.link}
          >
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
          </a>
          <a href='https://github.com/Tunji545' className={classes.link}>
            <FontAwesomeIcon icon={faLink} size='2x' />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
