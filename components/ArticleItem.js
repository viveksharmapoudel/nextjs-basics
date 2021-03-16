import Link from "next/link";
import articleStyles from "../styles/Articles.module.css";
function ArticleItem({ article }) {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
}

export default ArticleItem;
