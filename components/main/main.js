import React from 'react';
import PropTypes from 'prop-types';
import {
  motion, useViewportScroll, useTransform,
} from 'framer-motion';
import styles from './main.module.scss';
import Phone from '../icons/phone';

const Main = ({ headText, text1, text2 }) => {
  const { scrollYProgress } = useViewportScroll();
  const keyX = useTransform(scrollYProgress, [0, 0.1], [0, -74]);
  const keyY = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const lockX = useTransform(scrollYProgress, [0, 0.1], [0, 150]);
  const lockY = useTransform(scrollYProgress, [0, 0.1], [0, -59]);
  const backLockX = useTransform(scrollYProgress, [0, 0.1], [0, 149]);
  const backLockY = useTransform(scrollYProgress, [0, 0.1], [0, -60]);

  return (
    <section className={styles.main}>
      <div className={`container ${styles.mainContainer}`}>
        <div className={styles.text}>
          <h1 className={styles.title}>{headText}</h1>
          <span className={styles.subtitle}>{text1}</span>
          <span className={styles.subtitle}>{text2}</span>
          <span className={styles.subtitleButton}>
            <span className={styles.phoneIcon}><Phone /></span>
            602 553 857
          </span>
          {/* <span className={styles.subtitle}>O escribe nos</span> */}
        </div>
        <div
          className={styles.imgContainer}
        // initial={{ scale: 0.8 }}
        // animate={{ scale: 1 }}
        // transition={{
        //   type: 'spring',
        //   damping: 20,
        // }}
        >
          <div className={styles.imgWrapper}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

Main.propTypes = {
  headText: PropTypes.elementType.isRequired,
  text1: PropTypes.elementType.isRequired,
  text2: PropTypes.elementType.isRequired,
};

export default Main;
