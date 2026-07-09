import { site, navLinks } from "../../data/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className={styles.brand}>
              {site.name}
              <span className={styles.dot} />
            </p>
            <p className={styles.tagline}>{site.tagline}</p>
            <p className={styles.address}>{site.address}</p>
          </div>

          <div>
            <p className={styles.colTitle}>Навигация</p>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href="#trial">Запись на занятие</a>
              </li>
            </ul>
          </div>

          <div>
            <p className={styles.colTitle}>Контакты</p>
            <ul>
              <li>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <p className={styles.colTitle}>Мы в соцсетях</p>
            <ul className={styles.social}>
              <li>
                <a href={site.social.telegram} target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </li>
              <li>
                <a href={site.social.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} {site.name}</span>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}
