import { useEffect, useState } from 'react';
import Quote from './Quote';
import axios from 'axios';
import './Home.css';

const Home = () => {

  const [dailyQuote, setDailyQuote] = useState({quote:'', author: ''}); 

  const config = {
    headers: { 'Content-Type': 'application/json' },
    params: { language: 'en' }
  };

  useEffect(() => {
    axios.get('https://quotes.rest/qod', config)
      .then(resp => {
        setDailyQuote({
          quote: resp.data.contents.quotes[0].quote,
          author: resp.data.contents.quotes[0].author
        });
      }).catch(error => {
        console.log('Quote Error:', error);
      });
  }, []);

  return (
    <div className="home">
      <div className="home-content">
        <div className="welcome-title">Hi, welcome to Diego's World!</div>
        <div className="welcome-body">Feel free to explore some of the projects I have built, as well as my latest resume.</div>
        <div className="welcome-body">I also try to post detailed explanations of some of my favorite Physics/CS problems.</div>
      </div>
      <Quote 
        quote={dailyQuote.quote} 
        author={dailyQuote.author}
        />
    </div>
  )
}

export default Home;