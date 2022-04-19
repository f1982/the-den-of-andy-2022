
import ImageComponent from '../../atoms/Image/Image';

function PageHero({ image }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '600px',
        backgroundColor: '#e5e5f7',
        // https://www.magicpattern.design/tools/css-backgrounds
        // background:
        // 'repeating-linear-gradient( 45deg, #6ac22b, #6ac22b 5px, #e5e5f7 5px, #e5e5f7 25px )',
        backgroundPosition: '15px 0, 45px 0, 0 0, 0 0',
        backgroundSize: '30px 60px',
        backgroundRepeat: 'repeat',
        background: 'linear-gradient(0deg, #decb00 25%, transparent 25%)',

      }}
    >
      <div className="flex-1" />
      <div
        className="container mx-auto flex flex-col items-center"

      >
        {!!image && (
        <ImageComponent
          className=" mx-auto"
          src={image}
          alt="andy"
          height="50%"
          width="auto"
        />
        )}
      </div>
    </div>
  );
}

export default PageHero;
