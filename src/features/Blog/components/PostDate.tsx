import Typography from '../../../components/atoms/typography/Typography';
import parseDate from '../../../utils/date.utils';

export default function PostDate({ date }) {
  return <Typography variant="body" title={parseDate(date)} as="time" />;
}
