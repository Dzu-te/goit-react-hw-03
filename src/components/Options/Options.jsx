export const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  const handleGood = () => {
    updateFeedback("good");
  };
  const handleNeutral = () => {
    updateFeedback("neutral");
  };
  const handleBad = () => {
    updateFeedback("bad");
  };

  return (
    <>
      <button onClick={handleGood} type="button">
        Good
      </button>
      <button onClick={handleNeutral} type="button">
        Neutral
      </button>
      <button onClick={handleBad} type="button">
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} type="button">
          Reset
        </button>
      )}
    </>
  );
};
