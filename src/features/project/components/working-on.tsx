import Typography from '@/components/atoms/typography/Typography'
import { YoutubeIcon } from 'lucide-react'
import React from 'react'

const WorkingOn: React.FC = () => (
  <div className="dark:text-red flex flex-col items-center text-center">
    <Typography variant="h2">Working on</Typography>
    <div className="flex flex-row justify-center">
      <div className="mr-2 w-6">
        <YoutubeIcon />
      </div>
      <Typography variant="body">
        Video: How I build my WFH setups tour 2022
      </Typography>
    </div>
  </div>
)

export default WorkingOn
