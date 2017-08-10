import React from 'react';

// Scaffold uses CSS modules - any CSS files imported in this way, and applied as in the button below
// will have its class renamed to a unique name, meaning that class is effectively no longer "global"
import styles from './counter.less'

// This is a "presentational" / "stateless" / "dumb" component that is driven entirely by props
// It is responsible only for presentation and is not not aware of business logic
const Counter = ({ count, increment }) => {
  return (
    <button className={styles.button} onClick={increment}>
      You have clicked the button {count} time{count !== 1 ? 's' : ''}
    </button>
  )
};


export default Counter;
