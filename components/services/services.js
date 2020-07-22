import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './services.module.scss';

const Services = () => {
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
    <section id="services" className={styles.services}>
      <div className={`container ${styles.servicesContainer}`}>
        <h1 className={styles.head}>Servicios</h1>
        <div className={styles.content}>
          <motion.div
            ref={ref}
            className={styles.text}
            variants={stagger}
            initial="initial"
            animate={controls}
          >
            <motion.div variants={fadeInUp} className={styles.service}>
              <span>
                <strong>Aperturas sin romper </strong>
                de haber sido cerrada de golpe, en caso de tener que romper se lo consultamos.
              </span>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.service}>
              <span>
                <strong>Cambio de bombin </strong>
                ya que trabajamos con todas las marcas del mercado.
              </span>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.service}>
              <span>
                <strong>Cambio de cerradura </strong>
                ya que contamos con la variedad del mercado en la actualidad y de ser muy antigua
                buscamos la mejor opción.
              </span>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.service}>
              <span>
                <strong>Arreglo identificando el problema </strong>
                y hallando la mejor solución
              </span>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.service}>
              <span>
                <strong>Buzones </strong>
                para comunidad
              </span>
            </motion.div>
          </motion.div>
          <div className={styles.imgWrapper}>
            <img src="./images/bigLock.png" alt="key" className={styles.key} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
