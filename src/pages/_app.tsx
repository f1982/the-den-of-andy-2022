// import '../../scripts/wdyr';
import i18n from '../../i18n/index'
import { GoogleAnalytics } from '../components/molecules/analysis/SiteAnalystic'
import Layout from '../components/organisms/layouts/PageLayout'
import '../styles/global.css'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import { I18nextProvider } from 'react-i18next'

const MyApp: React.FC = ({
  Component,
  pageProps
}: {
  Component: any
  pageProps: any
}) => {
  // if the page has its specific layout, use it, if not, use default layout
  const getLayout =
    Component.getLayout || ((page: React.ReactNode) => <Layout>{page}</Layout>)

  return (
    <>
      <GoogleAnalytics trackingId={process.env.NEXT_PUBLIC_APP_GA_ID!} />
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          {getLayout(<Component {...pageProps} />)}
        </I18nextProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
