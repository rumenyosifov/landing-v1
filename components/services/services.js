import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './services.module.scss';

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

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
    <section id="servicios" className={styles.services}>
      <div className={`container ${styles.servicesContainer}`}>
        <div className={styles.content}>
          <motion.div
            ref={ref}
            className={styles.text}
            variants={stagger}
            initial="initial"
            animate={controls}
          >
            <h1 className={styles.head}>Nuestros servicios</h1>
            <motion.div variants={fadeInUp} className={styles.service}>
              <div className={styles.serviceCircle}>
                <img src="./images/apertura.jpg" alt="Aperturas sin romper" className={styles.serviceCircleImage} />
              </div>
              <div className={styles.serviceContent}>
                <h4 className={styles.serviceHead}>Aperturas sin romper</h4>
                <p>
                  de haber sido cerrada de golpe, en caso de tener que romper se lo consultamos.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.service}>
              <div className={styles.serviceCircle}>
                <img src="./images/bombin.jpg" alt="Cambio de bombin" className={styles.serviceCircleImage} />
              </div>
              <div className={styles.serviceContent}>
                <h4 className={styles.serviceHead}>Cambio de bombin</h4>
                <p>
                  Nosotros trabajamos con todas las marcas del mercado.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.service}>
              <div className={styles.serviceCircle}>
                <img src="./images/cerradura.jpg" alt="Cambio de cerradura" className={styles.serviceCircleImage} />
              </div>
              <div className={styles.serviceContent}>
                <h4 className={styles.serviceHead}>Cambio de cerradura</h4>
                <p>
                  ya que contamos con la variedad del mercado en la actualidad y de ser muy antigua
                  buscamos la mejor opción.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.service}>
              <div className={styles.serviceCircle}>
                <img src="./images/buzon.jpg" alt="Buzones" className={styles.serviceCircleImage} />
              </div>
              <div className={styles.serviceContent}>
                <h4 className={styles.serviceHead}>Buzones</h4>
                <p>
                  Buzones para comunidad
                </p>
              </div>
            </motion.div>
          </motion.div>
          <div className={styles.imgWrapper}>
            <img src="./images/bigLock.png" alt="cerradura" className={styles.key} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
