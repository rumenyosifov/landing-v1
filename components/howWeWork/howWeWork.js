import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './howWeWork.module.scss';
import Phone from '../icons/phone';
import WhatsApp from '../icons/whatsapp';
import Calculator from '../icons/calculator';
import Transport from '../icons/transport';

const HowWeWork = () => {
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
    <section id="contactos" className={styles.services}>
      <div className={`container ${styles.servicesContainer}`}>
        <div className={styles.content}>
          <motion.div
            ref={ref}
            className={styles.text}
            variants={stagger}
            initial="initial"
            animate={controls}
          >
            <h2 className={styles.head}>Contactos</h2>
            <motion.p className={styles.info} variants={fadeInUp}>
              Cerrajeros que nos responsabilizamos por tu seguridad las 24 horas, conocemos bien
              nuestro trabajo y podemos ofrecerte las mejores opciones.
            </motion.p>
            <div className={styles.contacts}>
              <div className={styles.contactPhone}>
                <span className={styles.phoneIcon}><Phone /></span>
                602 553 857
              </div>
              <div className={styles.contactWA}>
                <span className={styles.waIcon}><WhatsApp /></span>
                602 553 857
              </div>
            </div>
            <h5 className={styles.subHead}>Como Trabajamos</h5>
            <motion.div variants={fadeInUp} className={styles.service}>
              <div className={styles.serviceCircle}>
                <span className={styles.line} />
                <Phone />
              </div>
              <div className={styles.serviceContent}>
                {/* <strong>Aperturas sin romper </strong>
                de haber sido cerrada de golpe, en caso de tener que romper se lo consultamos. */}
                <h4 className={styles.serviceHead}>Nos llamas o escribes</h4>
                <p>
                  Nos llabais o nos escribes en WhatsApp explicandonos la situacion
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.service}>
              <div className={styles.serviceCircle}>
                <span className={styles.line} />
                <Calculator />
              </div>
              <div className={styles.serviceContent}>
                {/* <strong>Cambio de bombin </strong>
                ya que trabajamos con todas las marcas del mercado. */}
                <h4 className={styles.serviceHead}>Calculamos el precio</h4>
                <p>
                  Calculamos el precio exacto depenciendo de tu situacion concreto
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.service}>
              <div className={styles.serviceCircle}>
                <Transport />
              </div>
              <div className={styles.serviceContent}>
                {/* <strong>Cambio de cerradura </strong>
                ya que contamos con la variedad del mercado en la actualidad y de ser muy antigua
                buscamos la mejor opción. */}
                <h4 className={styles.serviceHead}>Venimos a tu direccion</h4>
                <p>
                  Nosotros venumos trayendo todo el necesario y arreglamos tu problema
                </p>
              </div>
            </motion.div>
          </motion.div>
          <div className={styles.imgWrapper}>
            <img src="./images/calculate.png" alt="key" className={styles.key} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
