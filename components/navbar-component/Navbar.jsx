import ActiveLink from "../activelink-component/ActiveLink";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      <ActiveLink text="Home" href="/" />
      <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" />
    </nav>
  );
};

export default Navbar;
