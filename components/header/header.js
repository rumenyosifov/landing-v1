import React from 'react';
import Link from 'next/link';
import {
  motion, useViewportScroll, useTransform, useCycle,
} from 'framer-motion';
import Logo from '../icons/logo';
import styles from './header.module.scss';
import Hamburger from './hamburger';

const Header = () => {
  const { scrollYProgress } = useViewportScroll();
  const sectionMove = useTransform(scrollYProgress, [0, 0.2], ['15vh', '8vh']);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.2],
    ['0px 7px 20px 0px rgba(68, 68, 68, 0)', '0px 7px 20px 0px rgba(68, 68, 68, 0.3) '],
  );

  const easing = [0.6, -0.05, 0.01, 0.99];

  const sidebar = {
    open: {
      x: '-100vw',
      transition: { duration: 0.6, ease: easing },
    },
    closed: {
      x: 0,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };
  return (
    <motion.header
      className={styles.header}
      style={{ height: sectionMove, boxShadow }}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/">
          <a className={styles.logo}>
            <Logo />
            <div className={styles.logoText}>El Umbral Cerrojeria</div>
          </a>
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/#servicios"><a>Servicios</a></Link>
            </li>
            <li>
              <Link href="/#zonas"><a>Zonas</a></Link>
            </li>
            <li>
              <Link href="/#contactos"><a>Contactos</a></Link>
            </li>
            {/* <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li> */}
          </ul>
        </nav>
        <Hamburger toggle={() => toggleOpen()} />
        <motion.nav className={styles.mobileNav} variants={sidebar}>
          <ul>
            <li>
              <Link href="/#servicios">
                <a onClick={toggleOpen} role="link" tabIndex={0} onKeyUp={toggleOpen}>Servicios</a>
              </Link>
            </li>
            <li>
              <Link href="/#zonas">
                <a onClick={toggleOpen} role="link" tabIndex={0} onKeyUp={toggleOpen}>Zonas</a>
              </Link>
            </li>
            <li>
              <Link href="/#contactos">
                <a onClick={toggleOpen} role="link" tabIndex={0} onKeyUp={toggleOpen}>Contactos</a>
              </Link>
            </li>
          </ul>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
