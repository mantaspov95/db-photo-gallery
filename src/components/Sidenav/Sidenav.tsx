import styles from "./Sidenav.module.scss";
import Logo from "@assets/logo-small.svg?react";
import HomeLogo from "@assets/icon-default.svg?react";
import FavouritesLodo from "@assets/icon-heart.svg?react";
import NewsletterLogo from "@assets/icon-mail.svg?react";
import LightModeLogo from "@assets/icon-light-mode.svg?react";
import DarkModeLogo from "@assets/icon-dark-mode.svg?react";

import { useState, type ReactNode } from "react";
type MenuOptionsItem = {
  name: string;
  title: string;
  icon: ReactNode;
};

const MENU_OPTIONS: MenuOptionsItem[] = [
  {
    name: "home",
    title: "Home",
    icon: <HomeLogo />,
  },
  {
    name: "favourites",
    title: "My Favourites",
    icon: <FavouritesLodo />,
  },
];

type NavLinksProps = {
  activeOption: MenuOptionsItem["name"];
  onLinkChange: (value: MenuOptionsItem["name"]) => void;
};
const NavLinks = ({ activeOption, onLinkChange }: NavLinksProps) => {
  return (
    <nav>
      <ul role="menubar" className={`${styles["sidenav__item-group"]}`}>
        {MENU_OPTIONS.map((item) => (
          <li key={item.name} title={item.title}>
            <button
              type="button"
              role="menuitem"
              className={`   ${styles["sidenav__item-navlink"]} ${activeOption === item.name ? styles["active"] : ""}`}
              onClick={() => onLinkChange(item.name)}
              id={item.name}
              value={item.name}
            >
              {item.icon}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

//placeholder function. to be expanded as global util function
const toggleTheme = () => {
  const currentTheme: string | null = getCurrentTheme();
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
};

type FooterOptionsItem = MenuOptionsItem & {
  onClick: () => void;
};
const getCurrentTheme = () => {
  return document.documentElement.getAttribute("data-theme");
};

const Footer = () => {
  const currentTheme: string | null = getCurrentTheme();
  const isDarkTheme: boolean = currentTheme === "dark";
  const FooterOptions: FooterOptionsItem[] = [
    {
      name: "newsletter",
      title: "Subscribe to Newsletter",
      icon: <NewsletterLogo />,
      onClick: () => toggleTheme(),
    },
    {
      name: "change-theme",
      title: `Switch to ${isDarkTheme ? " light" : "dark"} mode`,
      icon: isDarkTheme ? <LightModeLogo /> : <DarkModeLogo />,
      onClick: () => toggleTheme(),
    },
  ];
  return (
    <nav>
      <ul
        role="menubar"
        className={`${styles["sidenav__item-group"]} ${styles["sidenav__item-group-footer"]}`}
      >
        {FooterOptions.map((item) => (
          <li
            key={item.name}
            title={item.title}
            className={`${styles["sidenav__item-footer"]}   `}
          >
            <button
              type="button"
              role="menuitem"
              onClick={item?.onClick}
              id={item.name}
              value={item.name}
              className={`${styles["sidenav__item"]} `}
            >
              {item.icon}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function Sidenav() {
  // i would consider using search params setting instead,but i guess i need router dom?
  const [activeTab, setActiveTab] = useState<MenuOptionsItem["name"]>(
    MENU_OPTIONS[0].name
  );
  return (
    <aside className={`${styles.sidenav} `}>
      <div className={`${styles["sidenav__item-group"]}`}>
        <Logo className={`${styles["sidenav__item"]}`} />
      </div>
      <NavLinks
        activeOption={activeTab}
        onLinkChange={(tab) => setActiveTab(tab)}
      />
      <Footer />
    </aside>
  );
}
