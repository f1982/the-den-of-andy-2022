import Box from './MyBox';

export default {
  title: 'Experiment/Box',
  component: Box,
};

export const Demos = () => (
  <div style={{ backgroundColor: '#06092c', height: '100vh' }}>
    <p>Demo</p>
    <Box />
  </div>
);
