// 3
import React from 'react';
import styles from './Button.module.css';


export default function Button({ type = 'default', onClick, children }) {
const classes = `${styles.button} ${type === 'primary' ? styles.primary : styles.default}`.trim();


return (
<button className={classes} onClick={onClick}>
{children}
</button>
);
}