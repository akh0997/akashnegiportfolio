import styles from "./Navbar.module.scss";

const Navbar = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <nav className={styles.navbar}>
      <div></div>
      <ul className={styles.menu}>
        <li>
          <a href="#home" onClick={handleLogoClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
