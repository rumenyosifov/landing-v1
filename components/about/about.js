import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './about.module.scss';
import Facebook from '../icons/facebook';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial');
    }
  }, [controls, inView]);

  const easing = [0.6, -0.05, 0.01, 0.99];
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.aboutContainer}`}>
        <h1 className={styles.head}>Contactos</h1>
        <div className={styles.content}>
          <motion.div
            ref={ref}
            className={styles.text}
            variants={stagger}
            initial="initial"
            animate={controls}
          >
            <motion.div className={styles.icons} variants={fadeInUp}>
              <Facebook />
            </motion.div>
            <motion.p className={styles.info} variants={fadeInUp}>
              Cerrajeros que nos responsabilizamos por tu seguridad las 24 horas, conocemos bien
              nuestro trabajo y podemos ofrecerte las mejores opciones.
            </motion.p>
            <motion.p className={styles.telephone} variants={fadeInUp}>
              Tel: 602553857
            </motion.p>
          </motion.div>
          <div className={styles.imgWrapper}>
            <img src="./images/me.jpg" alt="key" className={styles.key} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
