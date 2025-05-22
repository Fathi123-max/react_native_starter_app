import { ArticalType } from "@/src/types/ArticleType";
import axios from "axios";

const baseUrl = "https://newsapi.org/v2/";

export function get(
  url: string,
  setNews: React.Dispatch<React.SetStateAction<ArticalType[]>>
) {
  axios
    .get(baseUrl + url + "&apiKey=8fd9c37c86884467a2f461cb0d0c2167")
    .then((res) => {
      const filteredNews = res.data.articles.filter(
        (item: ArticalType) => item?.urlToImage !== null
      );
      setNews(filteredNews);
    })
    .catch((err) => {
      console.log(err);
    });
}
