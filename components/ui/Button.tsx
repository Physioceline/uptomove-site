"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-orange text-white hover:bg-orange-dark active:scale-95 shadow-md hover:shadow-lg",
  secondary:
    "bg-yellow text-navy hover:bg-yellow-dark active:scale-95 shadow-md hover:shadow-lg",
  outline:
    "border-2 border-navy text-navy bg-transparent hover:bg-navy hover:text-white active:scale-95",
  ghost:
    "text-navy bg-transparent hover:bg-navy-50 active:scale-95",
  white:
    "bg-white text-navy hover:bg-cream active:scale-95 shadow-md hover:shadow-lg",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2 rounded-full",
  md: "text-base px-6 py-3 rounded-full",
  lg: "text-base px-8 py-4 rounded-full font-bold",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps} />
    );
  }

  return <button className={classes} {...(props as ComponentPropsWithoutRef<"button">)} />;
}
