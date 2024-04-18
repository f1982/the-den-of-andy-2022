import clsx from 'clsx'
import { format, parseISO } from 'date-fns'

function parseDate(dateStr: string) {
  const date = parseISO(dateStr)
  return format(date, 'LLLL d, yyyy')
}

const FormattedDate = ({
  date,
  className,
}: {
  date: string
  className?: string
}) => <span className={clsx('text-xs', className)}>{parseDate(date)}</span>

export default FormattedDate
