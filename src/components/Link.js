import React from "react";

export default function Link({ href, children }) {
  return (
    <a className="navigation__link" href={href}>
      {children}
    </a>
  );
}
