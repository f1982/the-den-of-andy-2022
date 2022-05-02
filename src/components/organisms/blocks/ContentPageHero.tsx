import Typography from '../../atoms/typography/Typography';

function LandscapeHero({ image, text }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '30vh',
        backgroundColor: 'blue',
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}
    >
      <div className="flex-1" />
      <div
        className="container mx-auto flex flex-col items-end "
        style={{ marginBottom: '20px', bottom: 0, float: 'right' }}
      >
        {!!text && (
        <div className="bg-black p-6 w-1/2">
          <Typography
            className="text-on-surface"
            title={text}
            variant="body"
          />
        </div>
        )}
      </div>
    </div>
  );
}

export default LandscapeHero;