import Carousel from './Carousel';

export default {
  title: 'UI/Carousel',
  component: Carousel,
  argTypes: {
    title: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};

const images = [
  'http://placekitten.com/200/300',
  'http://placekitten.com/300/300',
  'http://placekitten.com/400/300',
];

export const Demos = () => (
  <div style={{ maxWidth: '800px' }}>
    <p>Demo</p>
    <Carousel images={images} />
  </div>
);
