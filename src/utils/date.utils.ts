import { format, parseISO } from 'date-fns';

export default function parseDate(dateStr: string) {
  const date = parseISO(dateStr);
  return format(date, 'LLLL d, yyyy');
}
/**
 *
 * @param dateString input birth date with string format
 * @returns
 */
export function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age;
}