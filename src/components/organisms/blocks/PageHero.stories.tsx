import PageHero from './PageHero';

export default {
  title: 'Blocks/PageHero',
  component: PageHero,
  argTypes: {
    title: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};

export function Headings() {
  return (
    <div>
      <PageHero image="http://placekitten.com/1800/1500" />
    </div>
  );
}
