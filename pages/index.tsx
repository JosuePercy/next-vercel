import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import { DarkLayaout } from "../components/layouts/DarkLayaout";
import { MainLayout } from "../components/layouts/MainLayaout";
import styles from "../components/layouts/MainLayout.module.css";

interface ContactPageProps {
  children: ReactNode;
}

export default function HomePage({ children }: ContactPageProps) {
  return (
    <>
      <h1>Home Page </h1>
      <h1 className={styles.title}>
        Ir a <Link href="/about">About</Link>
      </h1>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/index.tsx</code>
        </p>
      </div>
    </>
  );
}
HomePage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayaout>{page}</DarkLayaout>
    </MainLayout>
  );
};
