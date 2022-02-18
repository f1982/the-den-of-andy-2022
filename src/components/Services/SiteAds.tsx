function GoogleAds() {
  if (process.env.NEXT_PUBLIC_APP_GAD !== 'on') {
    return (<div />);
  }
  return (
    <div style={{ height: '150px', width: '100%', border: '1px solid #cccccc' }}>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        crossOrigin="anonymous"
      />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
               (adsbygoogle = window.adsbygoogle || []).push({
                   google_ad_client: "${process.env.NEXT_PUBLIC_APP_GAD_ID}",
                   enable_page_level_ads: true
               });
                `,
        }}
      />
    </div>
  );
}

function GoogleAdsBanner() {
  return <div>banner</div>;
}

export { GoogleAds, GoogleAdsBanner };
