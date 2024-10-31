import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/utils";

type Props = HTMLAttributes<HTMLDivElement>;

export const Footer = forwardRef<HTMLDivElement, Props>(function Header(
  { className, ...rest },
  ref,
) {
  return <footer ref={ref} className={cn("", className)} {...rest}></footer>;
});
