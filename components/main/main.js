import React from 'react';
import {
  motion, useViewportScroll, useTransform,
} from 'framer-motion';
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
        <motion.div
          className={styles.imgWrapper}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            damping: 20,
          }}
        >
          <div className={styles.circle} />
          <motion.div
            x={keyX}
            y={keyY}
            className={styles.key}
            initial={{ right: -300 }}
            animate={{ right: -160 }}
            transition={{
              type: 'spring',
              damping: 20,
            }}
          />
          <motion.div
            x={lockX}
            y={lockY}
            className={styles.lock}
            initial={{ left: -411 }}
            animate={{ left: -271 }}
            transition={{
              type: 'spring',
              damping: 20,
            }}
          />
          <motion.div
            x={backLockX}
            y={backLockY}
            className={styles.lockBack}
            initial={{ left: 114 }}
            animate={{ left: 254 }}
            transition={{
              type: 'spring',
              damping: 20,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Main;
