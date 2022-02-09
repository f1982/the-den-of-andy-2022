// import Image from 'next/image';
import Button from '../ui/Button';
import Image from '../ui/Image';

function ColumnHero() {
  return (

    <section className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="lg:w-2/3 md:w-3/6 w-5/6 mb-10 object-cover"
          alt="hero"
          src="/static/images/hobby-drawing-cover.jpg"
          width={450}
          height={320}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
          Before they sold out readymade gluten
        </h1>
        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div className="flex justify-center">
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
        </div>
      </div>
    </section>

  );
}

export default ColumnHero;
