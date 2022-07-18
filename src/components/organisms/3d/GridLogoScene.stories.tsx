import Block from './GridLogoScene';

export default {
  title: 'Experiment/Block',
  component: Block,
};

export const Demos = () => (
  <div style={{ backgroundColor: '#06092c', height: '100vh' }}>
    <p>Demo</p>
    <Block />
  </div>
);
