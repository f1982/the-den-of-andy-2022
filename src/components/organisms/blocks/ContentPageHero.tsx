import Typography from '../../atoms/typography/Typography';

function LandscapeHero({ image, text }: { image: string, text?: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '30vh',
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
              variant="body"
            >
              {text}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}

export default LandscapeHero;