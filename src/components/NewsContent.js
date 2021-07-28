import { Container } from '@material-ui/core';
import React from 'react';
import apple from '../assets/apple2.png';
import android from '../assets/android.png';
import { makeStyles } from '@material-ui/core';
import NewsCard from './NewsCard';

const useStyles = makeStyles({
  content: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  flex: {
    display: ' flex',
    justifyContent: 'space-between',
    width: '95%',
    alignItems: 'center',
    height: '48px',
    background: '#f44336',
    boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
    margin: '20px auto 34px auto',
    color: ' white',
    '@media only screen and (max-width: 950px)': {
      display: 'none',
    },
  },
  title: {
    paddingLeft: '3%',
  },
  right: {
    display: 'flex',
    height: '48px',
    alignItems: 'center',
    paddingLeft: '6%',
    paddingRight: '6%',
  },
  loadMore: {
    backgroundColor: 'white',
    padding: '7px 20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '13px',
  },
});

const NewsContent = ({ newsArray, newsResult, loadMore, setLoadMore }) => {
  const classes = useStyles();

  return (
    <Container maxWidth='md'>
      <div className={classes.content}>
        <div className={classes.flex}>
          <div className={classes.title}>
            For the best experience use inshorts app on your smart phone
          </div>
          <div className={classes.right}>
            <img
              src={apple}
              alt='apple.png'
              height='32px'
              style={{ paddingRight: '15%' }}
            />
            <img src={android} alt='apple.png' height='32px' />
          </div>
        </div>
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} />
        ))}
        {(loadMore <= newsResult) &
        (
          <>
            <hr />
            <button
              className={classes.loadMore}
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
