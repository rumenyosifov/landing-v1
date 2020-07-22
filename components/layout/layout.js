import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import styles from './layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <a href="#content" className={styles.skipToContent}>
      Skip to Content
    </a>
    <Header />
    <div id="content">{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
