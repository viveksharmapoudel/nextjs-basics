import Head from "next/head";
import Link from "next/link";
import ArticleList from "../components/ArticleList";
import { server } from "../config";
import axios from "../utils/axios"
import requests from "../utils/requests" 

export default function Home({ articles }) {
  return (
    <div>
      <h1>This is our home page!</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

//this one is mainly for staticSite generation in which all the possible links are generated in the beginning
export const getStaticProps = async () => {
  
  // const res = await axios.get(requests.allArticles);
  const res = await fetch(` ${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
