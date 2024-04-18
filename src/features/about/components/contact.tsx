/* eslint-disable react/no-danger */
import { useTranslations } from 'next-intl'

const Contact = () => {
  const t = useTranslations('contact')
  return (
    <div className="container mx-auto px-5">
      <section className="body-font relative text-gray-600">
        <div className="absolute inset-0 bg-gray-300" />
        <div className="container mx-auto flex px-5 py-24">
          <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
            <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
              Feedback
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600">
                Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </label>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-600">
                Message
                <textarea
                  id="message"
                  name="message"
                  className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </label>
            </div>
            <button
              type="button"
              className="rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
              Button
            </button>
            <p className="mt-3 text-xs text-gray-500">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div dangerouslySetInnerHTML={{ __html: t('contact.p1') }} />
        <div dangerouslySetInnerHTML={{ __html: t('contact.p2') }} />
        <div dangerouslySetInnerHTML={{ __html: t('contact.p3') }} />
      </section>
    </div>
  )
}

export default Contact
