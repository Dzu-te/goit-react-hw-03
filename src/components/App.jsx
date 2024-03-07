import { useState, useEffect } from "react";
import "./App.css";
import { Description } from "./Description/Description";
import { Feedback } from "./Feedback/Feedback";
import { Notification } from "./Notification/Notification";
import { Options } from "./Options/Options";

export const initialState = { good: 0, neutral: 0, bad: 0 };
const stateFields = Object.keys(initialState);
export default function App() {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem("feedbackState");
    return savedState ? JSON.parse(savedState) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("feedbackState", JSON.stringify(state));
  }, [state]);

  const updateFeedback = (feedbackType) => {
    if (stateFields.includes(feedbackType)) {
      setState((prevState) => ({
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1,
      }));
    }
  };

  const resetFeedback = () => setState(initialState);

  const totalFeedback = state.good + state.neutral + state.bad;
  const positivePercentage =
    totalFeedback > 0
      ? Math.round(((state.good + state.neutral) / totalFeedback) * 100)
      : 0;

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
