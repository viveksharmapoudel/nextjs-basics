import Link from "next/link";
import styles from "../styles/Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className=''>
        <li className=''>
          <Link href='/'>Home</Link>
        </li>
        <li className=''>
          <Link href='/about'> About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
