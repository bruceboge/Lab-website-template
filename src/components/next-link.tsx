import NextLink from "next/link";
import { forwardRef, type ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof NextLink>, "href"> & { href: string };

/** Link accepting plain href strings (internal paths, #hash, external, mailto). */
const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  { href, prefetch, scroll, replace, ...rest },
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
      {...(prefetch === undefined ? {} : { prefetch })}
      {...(scroll === undefined ? {} : { scroll })}
      {...(replace === undefined ? {} : { replace })}
      {...rest}
    />
  );
});

export default Link;
