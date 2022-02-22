export default function ProjectTitle({ id, title }:{id: string, title:string}) {
  return (
    <h1
      className="
      mx-auto
      text-3xl
      md:text-4xl
      md:leading-none
      md:text-left
      lg:text-5xl
      font-bold
      tracking-tighter
      leading-tight
      text-center
      py-9"
    >
      {title}
    </h1>
  );
}
