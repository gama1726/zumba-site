import { useState, useEffect } from "react";
import { site, navLinks } from "../../data/site";
import { Button } from "../ui/Button";
import styles from "./Header.module.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo} onClick={closeMenu}>
          {site.name}
          <span className={styles.dot} />
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.navFooter}>
            <a href={site.phoneHref} className={styles.phone}>
              {site.phone}
            </a>
            <Button href="#trial" size="lg" onClick={closeMenu}>
              Записаться
            </Button>
          </div>
        </nav>

        <div className={styles.actions}>
          <a href={site.phoneHref} className={styles.phoneDesktop}>
            {site.phone}
          </a>
          <Button href="#trial" className={styles.ctaDesktop}>
            Записаться
          </Button>
          <button
            type="button"
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMenuOpen((v) => !v)}
          />
        </div>
      </div>
    </header>
  );
}
