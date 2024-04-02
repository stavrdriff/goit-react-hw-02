import styles from "./Feedback.module.css";

const Feedback = ({ stats = { good: 0, neutral: 0, bad: 0 }, total = 0, positive = 0 }) => {
    return (
        <div className={styles.wrapper}>
            <p>Good: <span>{ stats.good }</span></p>
            <p>Neutral: <span>{ stats.neutral }</span></p>
            <p>Bad: <span>{ stats.bad }</span></p>
            <p>Total: <span>{ total }</span></p>
            <p>Positive: <span>{ positive }%</span>
            </p>
        </div>
    )
}

export default Feedback;
