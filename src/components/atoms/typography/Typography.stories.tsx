import Highlight from './Highlight';
import Headline from './Headline';

export default {
  title: 'UI/Typography',
  component: Headline,
  argTypes: {
    title: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};

export function Demos() {
  return (
    <div>
      <p>Demo</p>
      <Headline title="Hello world" />
    </div>
  );
}
