import { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedBackData, setFeedBackData] = useState(() => {
    const saveData = JSON.parse(window.localStorage.getItem("feedBackData"));
    return saveData || { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("feedBackData", JSON.stringify(feedBackData));
  }, [feedBackData]);

  const totalFeedback =
    feedBackData.good + feedBackData.neutral + feedBackData.bad;

  const handleUpdateFeedback = (feedbackType) => {
    setFeedBackData((value) => ({
      ...value,
      [feedbackType]: value[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setFeedBackData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className="container">
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={handleUpdateFeedback}
        resetFeedback={handleReset}
      />
      {totalFeedback > 0 ? (
        <Feedback feedBack={feedBackData} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
