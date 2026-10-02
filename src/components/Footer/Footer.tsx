import styles from "./Footer.module.css";

export function Footer() {
  const siteName =
    process.env.NEXT_PUBLIC_SITE_NAME ?? "Headless WordPress";

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          © {new Date().getFullYear()} {siteName}
        </p>
      </div>
    </footer>
  );
}