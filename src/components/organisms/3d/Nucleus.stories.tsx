import NucleusScene from './Nucleus'

export default {
  title: 'Experiment/Nucleus',
  component: NucleusScene
}

export const Demos = () => (
  <div style={{ backgroundColor: '#06092c', height: '100vh' }}>
    <p>Nucleus Demo</p>
    <NucleusScene />
  </div>
)
