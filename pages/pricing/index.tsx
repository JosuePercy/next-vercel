import Link from "next/link";
import { ReactNode } from "react";
import { DarkLayaout } from "../../components/layouts/DarkLayaout";
import { MainLayout } from "../../components/layouts/MainLayaout";
import styles from "../../components/layouts/MainLayout.module.css";

interface ContactPageProps {
  children: ReactNode;
}

export default function AboutPage({ children }: ContactPageProps) {
  return (
    <>
      <h1>Home pricing</h1>
      <h1 className={styles.title}>
        Ir a <Link href="/">Home</Link>
      </h1>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/pricing.tsx</code>
        </p>
      </div>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayaout>{page}</DarkLayaout>
    </MainLayout>
  );
};
