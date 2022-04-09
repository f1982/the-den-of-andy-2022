import Highlight from '../../components/atoms/typography/Highlight';
import useRenderCount from '../../hooks/useRenderCount';

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
      flex flex-col
      px-5 py-24
    "
    >
      <div>
        {infos.map((item) => (
          <div key={item.key}>
            {`${item.key}:${item.value}`}
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl">This is h1</h1>
        <h2 className="text-xl">This is h2</h2>
        <h3 className="text-lg">This is h3</h3>
        <h4 className="text-md">This is h4</h4>
        <p>This is h4</p>
      </div>
      <span>
        Here is the
        {' '}
        <Highlight>Hight light text</Highlight>
      </span>
    </div>
  );
}

export default DebugInfo;
