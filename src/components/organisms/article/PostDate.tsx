import Typography from '../../atoms/typography/Typography';
import parseDate from '../../../utils/date.utils';

export default function PostDate({ date }) {
  return <Typography variant="small" as="time">{parseDate(date)}</Typography>;
}