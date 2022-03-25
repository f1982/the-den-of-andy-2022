import Image from '../Image/Image';
import Headline from '../Typography/Headline';

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
        <h1 style={{ fontSize: '100px', color: '#ffff' }}>Hello</h1>
        <div><h1 style={{ fontSize: '26px', color: '#ffff' }}>A Software Developer who also love to make hardware</h1></div>
      </div>
      {/* <div className="rounded-3xl mx-auto md:w-2/5 w-full overflow-hidden"> */}
      {/* <Image
          alt="content"
          withLoader
          className="object-cover object-center h-full"
          src="/static/images/andy-at-cornfield.jpg"
          width="100%"
        /> */}
      {/* </div> */}
    </div>
  );
}

export default HeroHome;
