import { Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
      return options.map((option) => {
          return (<Button type="button" key={option} className="button" onClick={() => { onLeaveFeedback(option) }}>
      {option}
    </Button>)
   })


}
