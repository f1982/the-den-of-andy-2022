export default function ProjectTitle({ title }:{title:string}) {
  return (
    <h1 className="
      text-6xl
      md:text-5xl
      lg:text-7xl
      font-bold
      tracking-tighter
      leading-tight
      md:leading-none
      mx-auto
      text-center
      md:text-left
      "
    >
      {title}
    </h1>
  );
}
