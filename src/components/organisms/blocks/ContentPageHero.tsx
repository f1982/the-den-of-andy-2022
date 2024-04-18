import React from 'react'

interface LandscapeHeroProps {
  image: string
  text?: string
}

const LandscapeHero: React.FC<LandscapeHeroProps> = ({ image, text }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '50vh',
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      marginBottom: '2rem',
    }}>
    <div className="flex-1" />
    <div
      className="container mx-auto flex flex-col items-end "
      style={{ marginBottom: '20px', bottom: 0, float: 'right' }}>
      {!!text && (
        <div className="w-1/2 bg-black p-6">
          <span>{text}</span>
        </div>
      )}
    </div>
  </div>
)

export default LandscapeHero
