import { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedBackData, setFeedBackData] = useState(
    () => JSON.parse(window.localStorage.getItem("feedBackData")) ?? 0
  );

  useEffect(() => {
    window.localStorage.setItem("feedBackData", JSON.stringify(feedBackData));
  }, [feedBackData]);

  const totalFeedback =
    feedBackData.good + feedBackData.neutral + feedBackData.bad;

  return (
    <div className="container">
      <Description />
      <Options
        setFeedBackData={setFeedBackData}
        totalFeedback={totalFeedback}
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
