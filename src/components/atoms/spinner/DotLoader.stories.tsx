import DotLoader from './DotLoader'

export default {
  title: 'UI/Loader',
  component: DotLoader
}

export const Demos = () => (
  <div>
    <p>Demo</p>
    <DotLoader />
    <p>Demo</p>
    <DotLoader color="secondary" />
  </div>
)
