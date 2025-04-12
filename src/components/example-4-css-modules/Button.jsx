import styles from './button.module.css';

const Button = ({ buttonText }) => {
  return <button className={styles.btn}>{buttonText}Example 4</button>;
};

export default Button;