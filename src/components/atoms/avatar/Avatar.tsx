import React from 'react'

interface AuthorAvatarProps {
  name: string
  picture: string
}

const AuthorAvatar: React.FC<AuthorAvatarProps> = ({ name, picture }) => (
  <div className="flex items-center">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={picture}
      className="w-12 h-12 rounded-full mr-4"
      width={50}
      height={50}
      alt={name}
    />
    <div className="font-bold">{name}</div>
  </div>
)

export default AuthorAvatar
