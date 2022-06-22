import React from 'react';
import PropTypes from 'prop-types';
import styles from './info.module.scss';

const Info = ({ headText, text1 }) => (
  <section id="info" className={styles.info}>
    <div className={`container ${styles.infoContainer}`}>
      <div className={styles.infoContent}>
        <h2>{headText}</h2>
        <div>{text1}</div>
      </div>
    </div>
  </section>
);

Info.propTypes = {
  headText: PropTypes.elementType.isRequired,
  text1: PropTypes.node.isRequired,
};

export default Info;
