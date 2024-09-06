const Options = ({ setFeedBackData, totalFeedback }) => {
  const updateFeedback = (feedbackType) => {
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
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Options;
