import React, { useEffect, useState } from "react";
import { newsCollection } from "../../firebase";
import { showErrorToast } from "./../Utils/Toasts";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ReusableButton from "../Utils/ReusableButton";
import UnderConstruction from "../Utils/UnderConstruction";
import UpButton from "../Utils/upButton";
import news from "../../Resources/data/newsData";

const useStyles = makeStyles(() => ({
  circProgress: {
    margin: "50px auto",
    display: "flex",
    height: "100px",
  },
}));

const BigArticle = (props) => {
  const classes = useStyles();
  /*FIREBASE VERSION
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
*/

  const article = news.find(
    (newsItem) => newsItem.id === props.match?.params.id
  );

  if (!article)
    return (
      <UnderConstruction
        message="The article isnot found"
        path="/actualnosci"
      />
    );
  return (
    // <>
    //   {loading ? (
    //     <CircularProgress className={classes.circProgress} />
    //   ) : (
    <div className="big-article-wrapper">
      <img src={article.image} alt={article.title}></img>
      <div className="big-article-body">
        <div className="article-title">{article.title} </div>
        <div className="article-time-wrapper">
          <ScheduleIcon />
          <div className="article-time">{article.time}</div>
        </div>
        <div className="article-content">{article.content} </div>
      </div>
      <ReusableButton text="WSTECZ" path="/actualnosci/newsPage" arrow="left" />
      <UpButton />
    </div>
    //   )}
    // </>
  );
};

export default BigArticle;
