import RotatingWatch from './RotatingWatch';

export default {
  title: 'Experiment/RotatingWatch',
  component: RotatingWatch,
};

export function Demos() {
  return (
    <div style={{ height: '100vh' }}>
      <RotatingWatch modelFile="https://raw.githubusercontent.com/f1982/planet-of-images/main/img/hShr-watch-v1.glb" />
    </div>
  );
}
