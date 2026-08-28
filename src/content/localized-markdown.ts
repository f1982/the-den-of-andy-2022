import appPrivacyPolicy from '@/assets/md/app-privacy-policy.md'
import appPrivacyPolicyZhCN from '@/assets/md/app-privacy-policy.zh-CN.md'
import appSupport from '@/assets/md/app-support.md'
import appSupportZhCN from '@/assets/md/app-support.zh-CN.md'
import appTermsOfUse from '@/assets/md/app-terms-of-use.md'
import appTermsOfUseZhCN from '@/assets/md/app-terms-of-use.zh-CN.md'

const content = {
  appPrivacyPolicy: {
    en: appPrivacyPolicy,
    'zh-CN': appPrivacyPolicyZhCN,
  },
  appSupport: {
    en: appSupport,
    'zh-CN': appSupportZhCN,
  },
  appTermsOfUse: {
    en: appTermsOfUse,
    'zh-CN': appTermsOfUseZhCN,
  },
} as const

export function getLocalizedMarkdown(
  key: keyof typeof content,
  locale: string,
) {
  return content[key][locale === 'zh-CN' ? 'zh-CN' : 'en']
}
