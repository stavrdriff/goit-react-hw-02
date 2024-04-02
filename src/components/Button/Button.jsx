import styles from './Button.module.css';

const Button = ({ text = "Default text", onUpgrade  }) => {
    return (
        <button className={styles.button} onClick={ onUpgrade }>{ text }</button>
    )
}

export default Button;
