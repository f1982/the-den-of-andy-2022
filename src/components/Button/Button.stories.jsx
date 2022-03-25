import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
};

function Template(args) {
  return <Button {...args} />;
}

export const PrimaryButton = Template.bind({});
PrimaryButton.args = { type: 'primary', children: 'Primary Button' };

export const SecondaryButton = Template.bind({});
SecondaryButton.args = { type: 'secondary', children: 'Secondary Button' };
