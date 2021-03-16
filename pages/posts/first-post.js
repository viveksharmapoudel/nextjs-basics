import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <Layout>
      {" "}
      <h1> This is my first post</h1>
      <a href='/'> Go back to home</a>
      <Image src='/images/salman.jpg' height={340} width={340} alt='sallu' />
    </Layout>
  );
}
