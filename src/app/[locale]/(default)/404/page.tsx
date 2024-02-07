import MyButton from '../../../../../src-backup/components/atoms/buttons/Button'
import GlitchText from '../../../../components/molecule/glitch-text/GlitchText'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const PageNotFound = () => {
  const t = useTranslations('pageNotFound')
  return (
    <>
      {/* <TabTitle pageTitle={t('pageNotFound.pageTitle')} /> */}
      <div className="flex flex-col justify-center items-center">
        <GlitchText text={t('pageNotFound.errorCode')} />
        <h2 className="text-primary-dark mb-8 tracking-[1rem]">
          {t('pageNotFound.subtitle')}
        </h2>
        <Link href="/" legacyBehavior>
          <MyButton type="primary">
            {t('pageNotFound.backButtonLabel')}
          </MyButton>
        </Link>
      </div>
    </>
  )
}

PageNotFound.getLayout = function getLayout(page) {
  return <div className="grid place-items-center h-screen bg-black">{page}</div>
}

export default PageNotFound
