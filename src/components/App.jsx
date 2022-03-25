import React, { useState } from "react";
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './SectionTitle';
import { Notification } from './Notification';

export function App() {
  const[good, setGood] = useState(0)
  const[neutral, setNeutral] = useState(0)
  const[bad, setBad] = useState(0)
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  function getTotal() {
    return good + neutral + bad;
  }
  function getPositiveFeedback(){
    return ((good / getTotal()) * 100).toFixed(0);
  }

  function handleSetGood(){
     setGood(prev => prev +1);
   }
  function handleSetNeutral(){
    setNeutral(prev => prev +1);
  }
  function handleSetBad(){
    setBad(prev => prev +1);
  }


const options = [{name: "good", action: handleSetGood,}, {name: "neutral", action: handleSetNeutral,}, {name: "bad", action: handleSetBad,}]
 // function handleLeaveFeedback({ target }){
 //    this.setState(prev => ({
 //      [target.name]: prev[target.name] + 1,
 //    }));
 //  }

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          textTransform: 'uppercase',
          color: '#010101',
          marginLeft: '50px',
        }}
      >
        {/*React homework template*/}
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
          />
        </Section>
        <Section title="Statistics">
          {getTotal() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={getTotal()}
              positivePercentage={getPositiveFeedback()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
}
