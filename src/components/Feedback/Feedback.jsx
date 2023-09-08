import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const onLeaveFeedback = option => {
  //   setState(prevState => ({
  //     [option]: prevState[option] + 1,
  //   }));
  // };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
    }
  };

  const total = good + neutral + bad;

  const positivePercentage = () => {
    if (!total) {
      return 0;
    }
    return Math.round((good * 100) / total);
  };

  return (
    <>
      <Section title="Plase leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={{ good, neutral, bad }}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
