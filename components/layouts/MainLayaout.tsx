import Head from "next/head";
import { FC, ReactNode } from "react";
import { NavBar } from "../NavBar";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hola - Josue</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>{children}</main>
    </>
  );
};
