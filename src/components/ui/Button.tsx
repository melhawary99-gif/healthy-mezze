import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const classes =
    variant === "primary"
      ? "rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
      : "rounded-lg border border-green-600 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50";

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}