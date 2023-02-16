import Link from "next/link";
import styles from "../../components/layouts/MainLayout.module.css";
import { MainLayout } from "../../components/layouts/MainLayaout";
import { DarkLayaout } from "../../components/layouts/DarkLayaout";
import { ReactNode } from "react";

interface ContactPageProps {
  children: ReactNode;
}

export default function ContactPage({ children }: ContactPageProps) {
  return (
    <>
      <h1>Home contacts</h1>
      <h1 className={styles.title}>
        Ir a <Link href="/">Home</Link>
      </h1>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/contact.tsx</code>
        </p>
      </div>
    </>
  );
}

ContactPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayaout>{page}</DarkLayaout>
    </MainLayout>
  );
};
