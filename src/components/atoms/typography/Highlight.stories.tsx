import Highlight from './Highlight'
import Typography from './Typography'

export default {
  title: 'UI/Highlight',
  component: Highlight,
  argTypes: {
    title: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
}

export const Default = () => (
  <div>
    <div>
      <Highlight>
        <Typography variant="h1" as="h1" title="This is heading 1" />
      </Highlight>
    </div>
    <div>
      <Highlight>
        <Typography variant="body" as="p" title="This is body text" />
      </Highlight>
    </div>
    <div>
      <Highlight>
        <p>This is p</p>
      </Highlight>
    </div>
  </div>
)
