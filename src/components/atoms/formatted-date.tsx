import clsx from 'clsx'

import { parseDate } from '@/utils/utils'

const FormattedDate = ({
  date,
  className,
}: {
  date: string
  className?: string
}) => <span className={clsx('text-xs', className)}>{parseDate(date)}</span>

export default FormattedDate
