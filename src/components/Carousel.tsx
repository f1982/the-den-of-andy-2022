import ImageComponent from './ui/Image';

export default function Carousel({ images }:{images: string[]}) {
  return (
    <div>
      {
        images.map((item) => <ImageComponent key={item} src={item} width="100%" height="auto" alt="" />)
      }
    </div>
  );
}
