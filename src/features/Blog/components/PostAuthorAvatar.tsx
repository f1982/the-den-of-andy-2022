import Image from 'next/image';

export default function PostAuthorAvatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image src={picture} className="w-12 h-12 rounded-full mr-4" width={50} height={50} alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
