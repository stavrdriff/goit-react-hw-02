import styles from './Button.module.css';

const Button = ({ text = "Default text", onUpgrade  }) => {
    return (
        <button className={styles.button} onClick={ () => onUpgrade(text) }>{ text }</button>
    )
}

export default Button;
