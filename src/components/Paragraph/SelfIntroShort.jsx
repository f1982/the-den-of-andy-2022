/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';
import Link from 'next/link';
import Image from '../ui/Image';

function SelfIntroShort() {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto flex flex-col text-th-primary-dark">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg overflow-hidden">
            <Image
              alt="content"
              className="object-cover object-center h-full"
              src="/static/images/andy-at-cornfield.jpg"
              width={1200}
              height={600}
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200">
                <img
                  className="rounded-full"
                  width={80}
                  src="/static/images/avatar-pixel.jpg"
                  alt="andy avatar"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-lg">Andy Cao</h2>
                <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4" />
                <p>A Software Developer who also love to make hardware</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">Love to explore and create</p>
              <p className="leading-relaxed text-lg mb-4">My name is Andy Cao and I come from China 🇨🇳. I am a Software Developer 👨‍💻 who focuses on website and mobile 📱 application development.</p>
              <p className="leading-relaxed text-lg mb-4">
                I consider indie game 🕹 development as a leisure time hobby.
                I know some design 🎨. I am trying to be a life-long learner 🧠
                an excellent drone 🛸 pilot as well as a good father 💁🏻‍♂️
              </p>
              <Link href="/about/" passHref>
                <a className="inline-flex items-center">
                  Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelfIntroShort;
