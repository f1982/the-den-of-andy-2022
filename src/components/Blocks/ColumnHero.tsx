// import Image from 'next/image';
import Button from '../Button/Button';
import Image from '../Image/Image';

function ColumnHero() {
  return (
    <div className="
    container mx-auto flex px-5 py-24
    md:flex-row flex-col items-center
    "
    >
      <Image
        className="object-cover mb-6 md:mb-0"
        alt="hero"
        src="/static/images/hobby-drawing-cover.jpg"
        width="100%"
      />
      <div className="lg:w-1/2 md:w-2/3 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
          Before they sold out readymade gluten
        </h1>
        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div className="flex gap-x-3">
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
        </div>
      </div>
    </div>

  );
}

export default ColumnHero;
