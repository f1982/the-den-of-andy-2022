import Button from '../components/Button/Button';

export default {
  title: 'Button/Button',
  component: Button,
};

function Template(args) {
  return <Button {...args} />;
}

export const PrimaryButton = Template.bind({});
PrimaryButton.args = { type: 'primary', children: 'Primary Button' };

export const SecondaryButton = Template.bind({});
SecondaryButton.args = { type: 'secondary', children: 'Secondary Button' };
