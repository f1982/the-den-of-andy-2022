import { format, parseISO } from 'date-fns'

function parseDate(dateStr: string) {
  const date = parseISO(dateStr)
  return format(date, 'LLLL d, yyyy')
}

const FormattedDate = ({ date }) => (
  <span className="text-sm">{parseDate(date)}</span>
)

export default FormattedDate
