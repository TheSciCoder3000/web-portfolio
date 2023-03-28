import Head from "next/head";
import Image from "next/image";
import HomeStyles from "../styles/sass/Home.module.scss";

export default function Home() {
  return <div className={HomeStyles.section}>Home page</div>;
}
