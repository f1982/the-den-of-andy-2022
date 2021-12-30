import Image from 'next/image';

function Project({
  slug, title, cover, description,
}) {
  return (
    <article className="mb-32">
      <h3>
        title
        {title}
      </h3>
      <p>{slug}</p>
      <p>{`/projects/images/${cover}`}</p>
      <Image
        alt="cover image"
        className="object-cover object-center h-full w-full"
        src={`/projects/images/${cover}`}
          // src={ImagePath}
        width={650}
        height={250}
      />
      <p>
        details
        {description}
      </p>
    </article>
  );
}

export default Project;
