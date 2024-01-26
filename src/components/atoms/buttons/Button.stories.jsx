import Button from './Button'

export default {
  title: 'UI/Button',
  component: Button
}

const Template = (args) => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = { type: 'primary', children: 'Primary Button' }

export const SecondaryButton = Template.bind({})
SecondaryButton.args = { type: 'secondary', children: 'Secondary Button' }
