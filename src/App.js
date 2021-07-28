import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import NavInshorts from './components/NavInshorts';
import NewsContent from './components/NewsContent';
import API_KEY from './data/config';

function App() {
  const [category, setCategories] = useState('general');
  const [newsArray, setNewsArray] = useState([]);
  const [newsResult, setNewsResult] = useState();
  const [loadMore, setLoadMore] = useState(20);

  useEffect(() => {
    newsApi();
  }, [category, newsArray, loadMore]);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${API_KEY}&category=${category}&pagesize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewsResult(news.data.newsResults);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(newsArray);

  return (
    <div className='App'>
      <NavInshorts setCategories={setCategories} />
      <NewsContent
        loadMore={loadMore}
        setLoadMore={setLoadMore}
        newsArray={newsArray}
        newsResult={newsResult}
      />
      <Footer />
    </div>
  );
}

export default App;
