import LatestProjectItem from '@/features/project/components/latest-project-item'
import { Link } from 'lucide-react'
import React from 'react'

const LatestProjectImageURL =
  'https://raw.githubusercontent.com/f1982/planet-of-images/main/img/latest-project-wfh-setup-2022.png'

const LastProjects: React.FC = () => (
  <div className="container text-center">
    <h2>Latest Projects</h2>
    <Link id="test" href="/blog/my-wfh-desk-setups-2022">
      <LatestProjectItem
        title="My desktop setups for WFH 2022"
        cover={LatestProjectImageURL}
        description="Last year, I was WFH for most of time, that made me to reconsider my desktop setups and working environment at  I did some research, DIY some gadgets, bought some LED strips, two monitors, monitor stands, mechanical keyboard and new mouse. Iteratively to change the layout and reorganise the cables. It was a such great time to rethinking how the setups and arrangements can affect my daily work and productivity."
        platform="Article,Video"
      />
    </Link>
  </div>
)

export default LastProjects
