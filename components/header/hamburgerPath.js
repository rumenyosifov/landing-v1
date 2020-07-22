import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const HamburgerPath = ({ d, variants, transition }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    d={d}
    variants={variants}
    transition={transition}
  />
);

HamburgerPath.propTypes = {
  d: PropTypes.string.isRequired,
  variants: PropTypes.shape({}).isRequired,
  transition: PropTypes.shape({}).isRequired,
};

export default HamburgerPath;
