import useRenderCount from '../../lib/hooks/useRenderCount'

const DebugInfo = () => {
  const renderCount = useRenderCount()
  const infos: { key: string; value: string | undefined }[] = [
    { key: 'NEXT_PUBLIC_APP_GAD', value: process.env.NEXT_PUBLIC_APP_GAD },
    { key: 'environment', value: process.env.NODE_ENV },
    { key: 'App Version', value: process.env.NEXT_PUBLIC_APP_VERSION },
    { key: 'Site URL', value: process.env.NEXT_PUBLIC_APP_SITE_URL },
    { key: 'Render times', value: renderCount.toString() },
  ]

  return (
    <div
      className="
      container mx-auto
      flex
      flex-col px-5
      py-24 text-sm
    ">
      <div>
        {infos.map((item) => (
          <div key={item.key}>{`${item.key}:${item.value}`}</div>
        ))}
      </div>
    </div>
  )
}

export default DebugInfo
