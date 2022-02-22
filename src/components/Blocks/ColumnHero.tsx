// import Image from 'next/image';
import { HeroData } from '../../types';
import Button from '../Button/Button';
import Image from '../Image/Image';

function ColumnHero({
  title,
  image,
  description,
  buttons,
  viewPortOnce = false,
}:HeroData) {
  return (
    <div className="
    container mx-auto flex px-5 py-24
    md:flex-row flex-col items-center
    "
    >
      <Image
        className="object-cover mb-6 md:mb-0"
        alt="hero"
        src={image}
        width="100%"
      />
      <div className="lg:w-1/2 md:w-2/3 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
          {title}
        </h1>
        <p className="mb-8 leading-relaxed">{description}</p>
        <div className="flex gap-x-3">
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
        </div>
      </div>
    </div>

  );
}

export default ColumnHero;
