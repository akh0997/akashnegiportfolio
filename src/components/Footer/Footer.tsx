import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Akash Negi</p>
      <div className={styles.links}>
        <a
          href="https://github.com/akh0997"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/akash-negi-699415131"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:akh0997@gmail.com">akh0997@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
