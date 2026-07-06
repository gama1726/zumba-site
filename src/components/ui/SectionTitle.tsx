import styles from "./SectionTitle.module.css";

type Props = {
  children: React.ReactNode;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionTitle({
  children,
  subtitle,
  light,
  align = "left",
}: Props) {
  return (
    <header
      className={`${styles.wrap} ${light ? styles.light : ""} ${styles[align]}`}
    >
      <h2 className={styles.title}>{children}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}
