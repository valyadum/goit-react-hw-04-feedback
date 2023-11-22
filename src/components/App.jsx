import React, { useState} from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section'
import { Notification } from './Notification';
import { Container } from './App.styled';

export default function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };
  function onLeaveFeedback(data) {
    console.log(data);
    switch (data) {
      case 'good':
        setGood(prevState => prevState + 1);
        console.log('+1g');
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        console.log('+1n');
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        console.log('+1b');
        break;
      default:
        break;
    }
  }
   function countTotalFeedback() {
      return good + neutral + bad;
    };
   function countPositiveFeedbackPercentage() {
      return (
        Math.round((good /
          (good + neutral + bad)) *
        100)
      );
    };
  
  
  
  
  return (
    <Container>
      <Section title=" Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!(countTotalFeedback()) ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />)}
      </Section>
    </Container>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onLeaveFeedback = option => {
//     this.setState(prevState => ({
//       [option]:prevState[option]+1,
//     }
//     ));
//   }
//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     return (
//       Math.round((this.state.good /
//         (this.state.good + this.state.neutral + this.state.bad)) *
//       100)
//     );
//   };

  // render() {
  //   const { good, neutral, bad } = this.state;
  //   //const { total } = this.countTotalFeedback();
  //   return (
  //     <Container>
  //       <Section title=" Please leave feedback">
  //         <FeedbackOptions
  //           options={Object.keys(this.state)}
  //           onLeaveFeedback={this.onLeaveFeedback}
  //         />
  //       </Section>
  //       <Section title="Statistics">
  //         {!(this.countTotalFeedback()) ? (
  //           <Notification message="There is no feedback" />
  //         ) : (
  //           <Statistics
  //             good={good}
  //             neutral={neutral}
  //             bad={bad}
  //             total={this.countTotalFeedback()}
  //             positivePercentage={this.countPositiveFeedbackPercentage()}
  //           />
  //         )}
  //       </Section>
  //     </Container>
  //   );
  // }
// }

// export default App;
