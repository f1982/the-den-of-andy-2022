// import Image from 'next/image';
import ProjectTitle from './components/ProjectTitle';

function Project({
  slug, title, cover, description,
}) {
  return (
    <article className="mb-32">
      <ProjectTitle title={title} />
      <p>{slug}</p>
      <p>{`/projects/images/${cover}`}</p>
      {/* <Image
        alt={`${title} project cover image`}
        className="object-cover object-center h-full w-full"
        src={`/projects/images/${cover}`}
        width={650}
        height={250}
      /> */}
      <p>
        details
        {description}
      </p>
    </article>
  );
}

export default Project;
