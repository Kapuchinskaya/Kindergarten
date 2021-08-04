import React, { useEffect, useState } from "react";
import { newsCollection } from "../../firebase";
import { showErrorToast } from "./../Utils/Toasts";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NewsPage from "./../Articles/index";
import ArticleOverview from "./../Home/ArticlesOverview/index";

const useStyles = makeStyles(() => ({
  circProgress: {
    margin: "50px auto",
    display: "flex",
    height: "100px",
  },
}));

const NewsHoc = (props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(async () => {
    try {
      const snapshot = await newsCollection.get();
      const news = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      news.sort((a, b) => (a.time > b.time ? -1 : 1));
      setNews(news);
    } catch (error) {
      showErrorToast("Sorry try again later");
    }

    setLoading(false);
  }, []);

  const article = news.find(
    (newsItem) => newsItem.id === props.match?.params.id
  );

  const Component = components[props.match?.params.type ?? props.type];

  if (!Component) return null;
  return (
    <>
      {loading ? (
        <CircularProgress className={classes.circProgress} />
      ) : (
        <Component news={news} article={article} />
      )}
    </>
  );
};

export default NewsHoc;

const components = {
  newsPage: NewsPage,
  articleOverview: ArticleOverview,
};
