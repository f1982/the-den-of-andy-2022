import Typography from './Typography';

export default {
  title: 'UI/Typography',
  component: Typography,
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
      <Typography variant="h1" title="This is heading 1" />
      <Typography variant="h2" title="This is heading 2" />
      <Typography variant="h3" title="This is heading 3" />
      <Typography variant="h4" title="This is heading 4" />
      <Typography
        variant="body"
        as="p"
        title={`
          You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, 
          prefers-reduced-motion, and more. 
          For example, use md:text-base to apply the text-base utility at only medium screen sizes and above.
        `}
      />
      <Typography
        variant="small"
        as="p"
        title={`
          You can also use variant modifiers to target media queries like responsive breakpoints, 
          dark mode, prefers-reduced-motion, and more. For example, 
          use md:text-base to apply the text-base utility at only medium screen sizes and above.
        `}
      />
    </div>
  );
}
