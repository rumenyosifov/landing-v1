import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './whereWeAre.module.scss';

const WhereWeAre = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial');
    }
  }, [controls, inView]);

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <section id="zonas" className={styles.services}>
      <div className={`container ${styles.servicesContainer}`}>
        <div className={styles.content}>
          <motion.div
            ref={ref}
            className={styles.text}
            variants={stagger}
            initial="initial"
            animate={controls}
          >
            <h1 className={styles.head}>Donde estamos</h1>
            <div className={styles.lists}>
              <ul>
                <li>
                  <Link href="/cerrajeros-esplugues">
                    <a>Cerrajeros Esplugues</a>
                  </Link>
                </li>

                <li>
                  <Link href="/cerrajeros-hospitalet">
                    <a>Cerrajeros Hospitalet</a>
                  </Link>
                </li>

                <li>
                  <Link href="/cerrajeros-sants">
                    <a>Cerrajeros Sants</a>
                  </Link>
                </li>

                <li>
                  <Link href="/cerrajeros-les-corts">
                    <a>Cerrajeros Les Corts</a>
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
          <div className={styles.imgWrapper}>
            <img src="./images/map.png" alt="key" className={styles.key} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeAre;
