import Avatar from './Avatar'

const meta = {
  title: 'Den/Avatar',
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  }
}

export default meta

export const Primary = {
  args: { name: 'primary', picture: 'http://placekitten.com/800/500' }
}
