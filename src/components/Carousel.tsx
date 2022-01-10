import ImageComponent from './ui/Image';

export default function Carousel({ images }:{images: string[]}) {
  return (
    <div>
      {
        images.map((item) => <ImageComponent key={item} src={item} width={500} height={400} alt="" />)
      }
    </div>
  );
}
