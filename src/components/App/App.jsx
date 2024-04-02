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
    }, [stats]);

    const updateFeedback = (feedbackType = '') => {
        for(let key in stats) {
            if (key === feedbackType.toLowerCase()) {
                const result = stats[key];

                setStats({
                    ...stats,
                    [key]: result + 1,
                })
            }
        }
    }

    const resetFeedback = () => {
        setStats({
            good: 0,
            neutral: 0,
            bad: 0,
        })
    }

    const totalFeedback = stats.good + stats.neutral + stats.bad;
    const positiveFeedback =
        totalFeedback > 0
            ? Math.round((stats.good / totalFeedback) * 100)
            : 0;

    return (
        <>
            <Description />
            <Options
                onUpgrade={updateFeedback}
                total={totalFeedback}
                onReset={resetFeedback}
            />
            { totalFeedback
                ? <Feedback
                    stats={stats}
                    total={totalFeedback}
                    positive={positiveFeedback}
                />
                : <Notification />
            }
        </>
    )
}

export default App
