function GoogleAds() {
  if (process.env.NEXT_PUBLIC_APP_GAD === 'off') {
    return (<div />);
  }
  return (
    <div style={{ height: '150px', width: '100%', border: '1px solid #cccccc' }}>
      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_APP_GAD_ID}`}
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={process.env.NEXT_PUBLIC_APP_GAD_ID}
        data-ad-slot="7654736119"
      />
      <script>
        (adsbygoogle = window.adsbygoogle || []).push(
        {}
        );
      </script>
    </div>
  );
}

function GoogleAdsBanner() {
  return <div>banner</div>;
}

export { GoogleAds, GoogleAdsBanner };
