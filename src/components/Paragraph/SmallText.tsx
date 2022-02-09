import ImageComponent from '../ui/Image';
import Quote from '../Icons/Quote';

function SmallText({
  description,
  title,
  image,
}:{
    title?:string,
    image?:string,
    description:string
}) {
  return (
    <section className="container mx-auto">
      <div className="xl:w-2/3 lg:w-3/4 w-full mb-20 mx-auto">
        {!!title && <h2 className="font-bold title-font tracking-wider text-3xl font-bold mb-3">{title}</h2>}
        {!!image && <ImageComponent className="my-6" src={image} alt="andy" width={1200} height={300} />}
        <p className="leading-relaxed text-lg">{description}</p>
      </div>
    </section>
  );
}

export default SmallText;
