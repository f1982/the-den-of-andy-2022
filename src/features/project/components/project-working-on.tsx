import React from 'react'

import { YoutubeIcon } from 'lucide-react'

const ProjectWorkingOn: React.FC = () => (
  <div className="dark:text-red flex flex-col items-center text-center">
    <h2 className="text-xl font-bold">Working on</h2>
    <div className="flex flex-row justify-center">
      <div className="mr-2 w-6">
        <YoutubeIcon />
      </div>
      <p>Video: How I build my WFH setups tour 2022</p>
    </div>
  </div>
)

export default ProjectWorkingOn
