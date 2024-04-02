import './App.css'
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import { useState, useEffect } from "react";
import Notification from "../Notification/Notification.jsx";

const App = () => {
    const [stats, setStats] = useState(() => {
        const storageStats = window.localStorage.getItem("stats");

        return JSON.parse(storageStats) || { good: 0, neutral: 0, bad: 0, }
    })

    useEffect(() => {
        window.localStorage.setItem("stats", JSON.stringify(stats));
    });

    const updateFeedback = (feedbackType = '') => {
        for(let key in stats) {
            if (key === feedbackType.target.textContent.toLowerCase()) {
                const result = stats[key] += 1;

                setStats({
                    ...stats,
                    key: result,
                })
            }
        }

        if (feedbackType.target.textContent.toLowerCase() === 'reset') {
            setStats({
                good: 0,
                neutral: 0,
                bad: 0,
            })
        }
    }

    const totalFeedback = stats.good + stats.neutral + stats.bad;

    return (
        <>
            <Description />
            <Options onUpgrade={updateFeedback}  total={totalFeedback} />
            { totalFeedback ? <Feedback stats={stats} total={totalFeedback} /> : <Notification /> }
        </>
    )
}

export default App
