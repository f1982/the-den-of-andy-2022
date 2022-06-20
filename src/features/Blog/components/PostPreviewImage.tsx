
interface PostCoverImageProps {
  title: string;
  src: string;
  slug: string;
}

export default function PostCoverImage(
  {
    title,
    src,
    slug,
  }: PostCoverImageProps,
) {
  return (
    <div className="mx-auto">
      {slug ? (
        <img
          className="rounded-xl object-cover w-full h-[270px] mb-6"
          alt={title}
          src={src}
        />

      ) : (
        <p>image</p>
      )}
    </div>
  );
}
