import Typography from '../../atoms/typography/Typography';

function LandscapeHero({ image, text }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '500px',
        backgroundColor: 'blue',
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}
    >
      <div className="flex-1" />
      <div
        className="container mx-auto bg-black"
        style={{ marginBottom: '20px', paddingLeft: '40%', bottom: 0 }}
      >
        {!!text && (
        <Typography
          className="text-on-surface"
          title={text}
          variant="body"
        />
        )}
      </div>
    </div>
  );
}

export default LandscapeHero;