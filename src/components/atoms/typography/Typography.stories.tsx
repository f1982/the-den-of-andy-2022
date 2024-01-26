import Typography from './Typography'

export default {
  title: 'UI/Typography',
  component: Typography,
  argTypes: {
    title: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
}

export const Headings = () => (
  <div>
    <Typography variant="h1">This is heading 1</Typography>
    <Typography variant="h2">This is heading 2</Typography>
    <Typography variant="h3">This is heading 3</Typography>
    <Typography variant="h4">This is heading 4</Typography>
    <Typography variant="body">
      You can also use variant modifiers to target media queries like responsive
      breakpoints, dark mode, prefers-reduced-motion, and more.For example, use
      md:text-base to apply the text-base utility at only medium screen sizes
      and above.
    </Typography>
    <Typography variant="small" as="p">
      You can also use variant modifiers to target media queries like responsive
      breakpoints, dark mode, prefers-reduced-motion, and more. For example, use
      md:text-base to apply the text-base utility at only medium screen sizes
      and above.
    </Typography>
  </div>
)
