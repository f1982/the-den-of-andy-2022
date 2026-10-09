import { getDictionary } from '@/utils/dictionaries'
import { fillTemplate } from '@/utils/fill-template'
import { localizedPath } from '@/utils/locale-path'

import Footer from '@/components/layout/footer/footer'

import { denSocialLinks } from '@/config/links'
import { otherLinks } from '@/config/menu-data'
import { contactEmail, contactMailto } from '@/config/site-config'

const LEGAL_KEYS = ['privacyPolicy', 'termsOfService']

export default async function SiteFooter({ locale }: { locale: string }) {
  const dict = await getDictionary(locale)
  const den = dict.den.common

  const legal = otherLinks
    .filter((item) => item.labelKey && LEGAL_KEYS.includes(item.labelKey))
    .map((item) => ({
      label: dict.common.footer[item.labelKey!],
      href: localizedPath(locale, item.link),
    }))

  return (
    <Footer
      copyright={fillTemplate(den.copyright, {
        year: new Date().getFullYear(),
      })}
      motto={den.motto}
      email={{ label: contactEmail, href: contactMailto }}
      socials={denSocialLinks.map((item) => ({
        label: item.label,
        href: item.href,
      }))}
      socialLabel={den.socialNavLabel}
      legal={legal}
      legalLabel={den.footerNavLabel}
      backToTop={den.backToTop}
    />
  )
}
