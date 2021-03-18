import Link from "next/link";
import Image from "next/image";
import axios from "../../utils/axios";
import requests from "../../utils/requests"
// import state from 

// const getData = () =>{

//   const getArticles =async ()=>{
//     axios.defaults.baseURL = 'http://192.168.1.71:8080/article-api';
//     const res= await axios.get('/article');
//     const article =await res.json();
//     console.log(article);
//   }
//   getArticles()
//   // console.log(axios.get(requests.allArticles))
// }

export default function FirstPost() {

  // getData()
  
  return (
    <>
      <h1> This is my first post</h1>
      <a href='/'> Go back to home</a>
      <Image src='/images/salman.jpg' height={340} width={340} alt='sallu' />
    </>
  );
}



// export const getServerSideProps = async (context) => {
//     const res = await axios.get(requests.allArticles)
//     const article = await res.json();
//     return {
//       props: { article },
//     };
//   };
