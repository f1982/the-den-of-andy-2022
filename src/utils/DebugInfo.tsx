import useRenderCount from '../hooks/useRenderCount';

function DebugInfo() {
  const renderCount = useRenderCount();
  const infos:{key:string, value:string}[] = [
    { key: 'NEXT_PUBLIC_APP_GAD', value: process.env.NEXT_PUBLIC_APP_GAD },
    { key: 'environment', value: process.env.NODE_ENV },
    { key: 'App Version', value: process.env.NEXT_PUBLIC_APP_VERSION },
    { key: 'Site URL', value: process.env.NEXT_PUBLIC_APP_SITE_URL },
    { key: 'Render times', value: renderCount.toString() },
  ];

  return (
    <div className="
      container mx-auto
      text-sm
      flex flex-col justify-center items-center
      px-5 py-24
    "
    >
      {infos.map((item) => (
        <div key={item.key}>
          {`${item.key}:${item.value}`}
        </div>
      ))}

      <h1>This is h1</h1>
      <h2>This is h2</h2>
      <h3>This is h3</h3>
      <h4>This is h4</h4>
    </div>
  );
}

export default DebugInfo;
