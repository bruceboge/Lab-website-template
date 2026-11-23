import NextLink from "next/link";
import { forwardRef, type AnchorHTMLAttributes } from "react";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  prefetch?: boolean;
  scroll?: boolean;
  replace?: boolean;
};

/** Link accepting plain href strings (internal paths, #hash, external, mailto). */
const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  { href, prefetch: _p, scroll: _s, replace, ...rest },
  ref,
) {
  if (!href.startsWith("/") || href.startsWith("//")) {
    return <a ref={ref} href={href} {...rest} />;
  }
  const [beforeHash, hash] = href.split("#");
  const [path, search] = (beforeHash ?? "/").split("?");
  return (
    <NextLink
      ref={ref}
      href={`${path || "/"}${search ? `?${search}` : ""}${hash ? `#${hash}` : ""}`}
      {...(replace ? { replace } : {})}
      {...(rest as Record<string, unknown>)}
    />
  );
});

export default Link;
