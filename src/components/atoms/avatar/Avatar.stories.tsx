import Avatar from './Avatar'

export default {
  title: 'UI/Avatar',
  component: Avatar
}

export const Demos = () => (
  <div>
    <p>Avatar Demo</p>
    <Avatar name="andy" picture="http://placekitten.com/800/500" />
  </div>
)
