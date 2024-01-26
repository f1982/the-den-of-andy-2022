import Button from './Button'

const meta = {
  title: 'Den/Button',
  component: Button,
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
  args: { type: 'primary', children: 'Primary Button' },
};

export const SecondaryButton = {
  args: { type: 'secondary', children: 'Primary Button' },
};
