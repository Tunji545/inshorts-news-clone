import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  newsCard: {
    display: 'flex',
    width: '100%',
    boxShadow:
      '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)',
    padding: '10px',
    marginBottom: '25px',
    borderRadius: ' 5px',
  },
  newsText: {
    padding: '0 0 0 10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  author: {
    fontSize: '12px',
    fontWeight: '300',
    lineHeight: '22px',
    color: '#808290',
  },
  lowerNewsText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    padding: '10px 0',
  },
  readMore: {
    fontSize: '12px',
    fontWeight: '400',
    paddingTop: '10px',
  },
  source: {
    textDecoration: 'none',
    color: 'black',
  },
  image: {
    objectFit: 'cover',
    width: '320px',
    height: '268px',
  },
  title: {
    fontSize: '22px',
    lineHeight: '27px',
    fontFamily: '"Roboto", "sans-serif"',
  },
  muted: {
    fontWeight: 100,
  },
  description: {
    fontSize: '16px',
    lineHeight: '22px',
    color: ' #44444d',
  },
  '@media (max-width: 800px)': {
    newsCard: {
      flexDirection: 'column',
      width: '100%',
    },
    image: {
      width: '100%',
      height: '100%',
      paddingBottom: '20px',
    },
  },
});

const NewsCard = ({ newsItem }) => {
  const classes = useStyles();

  const fullDate = new Date(newsItem.publishedAt);
  const date = fullDate.toString().split(' ');
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;

  return (
    <div className={classes.newsCard}>
      <img
        src={
          newsItem.urlToImage ||
          'http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1'
        }
        alt={newsItem.title}
        className={classes.image}
      />
      <div className={classes.newsText}>
        <div>
          <span className={classes.title}>{newsItem.title}</span>
          <br />
          <span className={classes.author}>
            <a href={newsItem.url}>
              <b className={classes.source}>short</b>
            </a>{' '}
            by {newsItem.author || 'Unknown'} /{' '}
            {time
              ? `${hour - 12} : ${parseInt(
                  date[4].toString().substring(3, 5)
                )} pm`
              : `${hour} : ${parseInt(
                  date[4].toString().substring(3, 5)
                )} am on ${date[2]} ${date[1]} ${date[3]}, ${date[0]} `}
          </span>
        </div>
        <div className={classes.lowerNewsText}>
          <p className={classes.muted}>{newsItem.description}</p>
          <p className={classes.readMore}>
            Read more at{' '}
            <a href={newsItem.url}>
              <b className={classes.source}>{newsItem.source.name}</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
