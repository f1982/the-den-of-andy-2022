import useRenderCount from '../hooks/useRenderCount';

function DebugInfo() {
  const renderCount = useRenderCount();
  return (
    <div>
      <div>
        NEXT_PUBLIC_APP_GAD:
        {' '}
        {process.env.NEXT_PUBLIC_APP_GAD}
      </div>
      <div>
        environment:
        {' '}
        {process.env.NODE_ENV}
      </div>
      <div>
        App Version:
        {' '}
        {process.env.NEXT_PUBLIC_APP_VERSION}
      </div>
      <div>
        Site URL:
        {' '}
        {process.env.NEXT_PUBLIC_APP_SITE_URL}
      </div>
      <div>
        Render times:
        {' '}
        {renderCount}
      </div>
    </div>
  );
}

export default DebugInfo;
