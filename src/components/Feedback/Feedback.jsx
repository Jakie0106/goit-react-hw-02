const Feedback = ({ feedBack, totalFeedback }) => {
  return (
    <div>
      <ul>
        <li>Good: {feedBack.good}</li>
        <li>Neutral: {feedBack.neutral}</li>
        <li>Bad: {feedBack.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {Math.round((feedBack.good / totalFeedback) * 100)}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
