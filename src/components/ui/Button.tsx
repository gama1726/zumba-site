import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import styles from "./Button.module.css";

type CommonProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | LinkProps;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Props) {
  const classes = [styles.btn, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href) {
    const { href, ...rest } = props as LinkProps;
    return <a href={href} className={classes} {...rest} />;
  }

  return <button type="button" className={classes} {...(props as ButtonProps)} />;
}
