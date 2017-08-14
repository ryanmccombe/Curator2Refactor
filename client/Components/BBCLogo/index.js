import React from 'react';
import logo from './logo.png';
import styles from './bbcLogo.less'

const BBCLogo = ({ width }) => {
  return (
    <img className={styles.logo} width={width} src={logo} />
  )
};

export default BBCLogo;