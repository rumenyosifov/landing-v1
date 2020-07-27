import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import styles from './main.module.scss';

const Main = () => {
  const { scrollYProgress } = useViewportScroll();
  const keyX = useTransform(scrollYProgress, [0, 0.2], [0, -74]);
  const keyY = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const lockX = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const lockY = useTransform(scrollYProgress, [0, 0.2], [0, -59]);
  const backLockX = useTransform(scrollYProgress, [0, 0.2], [0, 149]);
  const backLockY = useTransform(scrollYProgress, [0, 0.2], [0, -60]);
  return (
    <section className={styles.main}>
      <div className={`container ${styles.mainContainer}`}>
        <div className={styles.text}>
          <h1 className={styles.title}>Cerrajeros en Barcelona</h1>
          <span className={styles.subtitle}>Asistencia técnica de cerrajeros en Barcelona</span>
        </div>
        <div className={styles.imgWrapper}>
          <div className={styles.circle} />
          <motion.div
            x={keyX}
            y={keyY}
            className={styles.key}
          />
          <motion.div
            x={lockX}
            y={lockY}
            className={styles.lock}
          />
          <motion.div
            x={backLockX}
            y={backLockY}
            className={styles.lockBack}
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
