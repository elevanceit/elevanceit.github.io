import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/utils";

type Props = HTMLAttributes<HTMLDivElement>;

export const Header = forwardRef<HTMLDivElement, Props>(function Header(
  { className, ...rest },
  ref,
) {
  return <header ref={ref} className={cn("", className)} {...rest}></header>;
});
