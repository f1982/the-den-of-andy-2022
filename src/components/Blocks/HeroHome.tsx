import Image from '../Image/Image';

function HeroHome() {
  return (
    <div className="bg-surface py-9 w-full">
      <div className="rounded-3xl mx-auto md:w-2/5 w-full overflow-hidden">
        <Image
          alt="content"
          withLoader
          className="object-cover object-center h-full"
          src="/static/images/andy-at-cornfield.jpg"
          width="100%"
        />
      </div>
    </div>
  );
}

export default HeroHome;
