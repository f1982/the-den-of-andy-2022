import Typography from '../../../../src-backup/components/atoms/typography/Typography'
import parseDate from '../../../lib/date.utils'

const PostDate = ({ date }) => (
  <Typography variant="small" as="time">
    {parseDate(date)}
  </Typography>
)

export default PostDate
