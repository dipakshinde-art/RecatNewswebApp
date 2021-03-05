import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Component/NavBar";
import apiKey from "./Component/data/Config";
import NewsContent from "./Component/NewsContent/NewsContent";
import Footer from "./Component/Footer/Footer";

function App() {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(15);
  const [category, setCategory] = useState("general");

  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";

      const news = await axios.get(
        //  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize&category=${category}`
        `http://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&pagesize=${loadMore}`
      );
      // console.log(news.data.articles);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(newsArray);

  //fire news when naything changes=category
  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, category,loadMore]);

  return (
    <div className="App" id="#home">
      <NavBar setCategory={setCategory} />
      <NewsContent
        setLoadMore={setLoadMore}
        newsArray={newsArray}
        newsResults={newsResults}
        loadMore={loadMore}
      />
      <Footer />
    </div>
  );
}

export default App;
