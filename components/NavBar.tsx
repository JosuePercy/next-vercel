import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

export const NavBar = () => {
  const menuItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
    { text: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className={styles["capsule-conteiner"]}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink href={href} text={text} key={href} />
      ))}
    </nav>
  );
};
