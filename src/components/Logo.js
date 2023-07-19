import React from "react";
import logo from "../img/logo.jpg";
import Image from "./Image";
import Link from "../components/Link";

export default function Logo() {
  return (
    <Link href="#">
      <Image src={logo} alt="logo" />
    </Link>
  );
}
