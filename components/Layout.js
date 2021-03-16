import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Header from "./Header";
import Meta from "./Meta";
export default function Layout({ children }) {
  return (
    <>
      {/* for adding all the meta meta data to the site */}
      <Meta />

      {/* for nav bar  */}
      <Nav />

      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
}
