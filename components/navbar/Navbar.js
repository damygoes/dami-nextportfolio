import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Logo from "../../assets/logo2.svg";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>
          {" "}
          <Image src={Logo} alt="logo" />{" "}
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/skills"> Skills </Link>
          </li>
          <li>
            <Link href="/projects"> Projects </Link>
          </li>
          <li>
            <Link href="/blog"> Blog </Link>
          </li>
          <li>
            <Link href="/contact"> Contact </Link>
          </li>
        </ul>
        <div className={styles.buttonContainer}>
          <button> Hire Me </button>
        </div>
      </nav>
      <div className={styles.mobileContainer}>
        {toggleMenu ? (
          <HiOutlineX size={37} onClick={() => setToggleMenu(false)} />
        ) : (
          <HiOutlineMenu size={37} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className={styles.mobileLinks + " " + styles.scaleUpCenter}>
            <div>
              <ul>
                <li>
                  <Link href="/skills"> Skills </Link>
                </li>
                <li>
                  <Link href="/projects"> Projects </Link>
                </li>
                <li>
                  <Link href="/blog"> Blog </Link>
                </li>
                <li>
                  <Link href="/contact"> Contact </Link>
                </li>
              </ul>
              <div className={styles.buttonContainer}>
                <button> Hire Me </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
