import articleStyle from "../../../styles/ArticleItem.module.css"
import { useRouter } from "next/router";
import Link from "next/link";
import { server } from "../../../config";
// import axios from "../../../utils/axios"
// import requests from "../../../utils/requests" 
const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <div className={articleStyle.card}>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <Link href='/'>Go back</Link>
    </div>
  );
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(`${server}/api/articles/${context.params.id}`);

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {

//   // const res = await axios.get(requests.allArticles);
//   const res = await fetch(`${server}/api/articles`);
//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   console.log(ids);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  console.log(ids);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

// export const getServerSideProps = async (context) => {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//     );
//     const article = await res.json();
//     return {
//       props: { article },
//     };
//   };

export default article;

