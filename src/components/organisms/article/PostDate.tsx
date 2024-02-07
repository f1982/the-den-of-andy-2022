import parseDate from '../../../lib/date.utils'
import Typography from '../../atoms/typography/Typography'

const PostDate = ({ date }) => (
  <Typography variant="small" as="time">
    {parseDate(date)}
  </Typography>
)

export default PostDate
