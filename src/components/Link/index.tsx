import { forwardRef } from "react";

import NextLink from "next/link";

function Link(
  { href, shallow, replace, children, passHref, className }: any,
  ref: any
) {
  return href ? (
    <NextLink
      href={href}
      passHref={passHref}
      scroll={false}
      shallow={shallow}
      replace={replace}
      prefetch={false}
      className={className}
    >
      {children}
    </NextLink>
  ) : (
    <div className={className}>{children}</div>
  );
}

export default forwardRef(Link);
