import React from "react";

import { Button } from "shards-react";
import Link from "next/link";

const ButtonLink = props => {
  return (
    <Link href={props.href}>
      <Button {...props}>{props.children}</Button>
    </Link>
  );
};

export default ButtonLink;
