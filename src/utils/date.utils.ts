import { format, parseISO } from 'date-fns';

export default function parseDate(dateStr: string) {
  const date = parseISO(dateStr);
  return format(date, 'LLLL d, yyyy');
}