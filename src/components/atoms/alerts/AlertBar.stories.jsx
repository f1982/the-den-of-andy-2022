import AlertBar, { AlertType } from './AlertBar'

const meta = {
  title: 'Den/AlertBar',
  component: AlertBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Primary = {
  args: {
    type: AlertType.Warning,
    children: 'This is Error Bar',
  },
};

export const Demos = () => (
  <div>
    <p>Demo</p>
    <AlertBar type={AlertType.Warning}>This is Warning Bar</AlertBar>
    <AlertBar type={AlertType.Error}>This is Error Bar</AlertBar>
  </div>
)

