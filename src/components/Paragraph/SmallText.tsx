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
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <Quote />
          {!!image && <ImageComponent src={image} alt="andy" width={500} height={300} />}
          {!!title && <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{title}</h2>}
          <p className="leading-relaxed text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}

export default SmallText;
