import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";

const NewsContent = ({ newsArray, newsResults, setLoadMore, loadMore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            alt="app store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
        </div>
        {/* passing the value of news in aray form */}
        {newsArray.map((newsItem) => {
          return <NewsCard newsItem={newsItem} key={newsItem.title} />;
        })}

        {loadMore <= newsResults && (
          <>
            {" "}
            <hr />
            <button className="LoadMore" onClick={()=>setLoadMore(loadMore+15)}>Loadmore</button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
