import articleStyles from "../styles/Articles.module.css";
import ArticleItem from "./ArticleItem";
function ArticleList({ articles }) {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article, index) => (
        <ArticleItem article={article} key={index} />
      ))}
    </div>
  );
}

export default ArticleList;
