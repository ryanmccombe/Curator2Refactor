// When using JSX, a reference to React must exist in the namespace of the component, even if we're
// not using the reference in this file ourselves
import React from 'react';

// Importing and loading images in this manner allows Webpack to handle them - this makes applying loaders
// like compression or conversion to base64 easier, and allows us to programatically determine where the
// image should be stored, eg, cloudfront
import logo from './logo.png';

// Scaffold uses CSS modules - any CSS files imported in this way, and applied as in the image below
// will have its class renamed to a unique name, meaning that class is effectively no longer "global"
import styles from './bbclogo.less'

// This is a "presentational" / "stateless" / "dumb" component that is driven entirely by props
// It is responsible only for presentation and is not not aware of business logic
const BBCLogo = () => {
  return (
    <img className={styles.logo} src={logo} />
  )
};

export default BBCLogo;
