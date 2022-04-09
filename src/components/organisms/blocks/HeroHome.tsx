import Image from '../../atoms/Image/Image';
import Headline from '../../atoms/typography/Headline';

function HeroHome() {
  return (
    <div
      className="bg-surface py-9 w-full h-1/2]"
      style={{
        position: 'relative',
        height: '680px',
        background: 'url(/static/images/andy-at-cornfield.jpg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        // backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',

      }}
    >
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: '0',
        right: '0',
      }}
      />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

        position: 'absolute',
        height: '100%',
        width: '100%',
        top: '0',
        right: '0',

      }}
      >
        <h1 className="uppercase" style={{ fontSize: '100px', color: '#ffff' }}>Hello</h1>
        <div>
          <h2 style={{ color: '#ffff', textAlign: 'center' }}>I am Andy</h2>
          <h3 style={{ color: '#ffff', textAlign: 'center' }}>A software developer who also love to make hardware devices.</h3>
        </div>
      </div>
    </div>
  );
}

export default HeroHome;
