import parseDate from '../../../utils/date.utils'
import Typography from '../../atoms/typography/Typography'

const PostDate = ({ date }) => (
  <Typography variant="small" as="time">
    {parseDate(date)}
  </Typography>
)

export default PostDate
