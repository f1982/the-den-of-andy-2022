import Typography from '../../atoms/typography/Typography';
import parseDate from '../../../utils/date.utils';

const PostDate = ({ date }) => (
  <Typography variant="small" as="time">
    {parseDate(date)}
  </Typography>
);

export default PostDate;
