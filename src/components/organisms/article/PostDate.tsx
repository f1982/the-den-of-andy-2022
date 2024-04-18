import parseDate from '@/features/about/utils/date.utils'

const PostDate = ({ date }) => (
  <span className="text-sm">{parseDate(date)}</span>
)

export default PostDate
