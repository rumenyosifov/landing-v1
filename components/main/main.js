import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import styles from './main.module.scss';

const Main = () => {
  const { scrollYProgress } = useViewportScroll();
  const keyX = useTransform(scrollYProgress, [0, 0.2], [-160, -43]);
  const keyY = useTransform(scrollYProgress, [0, 0.2], [84, 80]);
  const lockX = useTransform(scrollYProgress, [0, 0.2], [334, 227]);
  const lockY = useTransform(scrollYProgress, [0, 0.2], [240, 176]);
  const backLockX = useTransform(scrollYProgress, [0, 0.2], [366, 259]);
  const backLockY = useTransform(scrollYProgress, [0, 0.2], [305, 241]);
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
            style={{ right: keyX, top: keyY }}
            className={styles.key}
          />
          <motion.div style={{ right: lockX, top: lockY }} className={styles.lock} />
          <motion.div style={{ right: backLockX, top: backLockY }} className={styles.lockBack} />
        </div>
      </div>
    </section>
  );
};

export default Main;
