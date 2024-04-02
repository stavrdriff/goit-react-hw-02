import styles from "./Options.module.css";
import Button from "../Button/Button.jsx";

const Options = ({ onUpgrade, total = 0 }) => {

    return (
        <div className={styles.wrapper}>
            <Button text={"Good"} onUpgrade={ onUpgrade } />
            <Button text={"Neutral"} onUpgrade={ onUpgrade } />
            <Button text={"Bad"} onUpgrade={ onUpgrade } />
            { total !== 0 && <Button text={"Reset"} onUpgrade={ onUpgrade } /> }

        </div>
    )
}

export default Options;
