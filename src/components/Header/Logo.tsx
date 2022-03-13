import Link from 'next/link';

function SVGLogoV1() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="61"
      fill="currentColor"
      viewBox="0 0 64 61"
    >
      <path
        d="M.879 44.621l10.798-10.798a3 3 0 014.426.2l8.612 10.335a3 3 0 01-.22 4.079L12.871 59.658a3 3 0 01-2.084.842H3a3 3 0 01-3-3V46.743a3 3 0 01.879-2.122zM49.6 59.3l-34.5-46a3 3 0 01-.6-1.8v-8a3 3 0 013-3h10.01a3 3 0 012.39 1.187l32.99 43.51a3 3 0 01.61 1.812V57.5a3 3 0 01-3 3H52a3 3 0 01-2.4-1.2z"
      />
    </svg>
  );
}

function SVGLogoV2() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="129"
      height="129"
      fill="currentColor"
      viewBox="0 0 129 129"
    >
      <path
        d="M129 64.5c0 35.622-28.878 64.5-64.5 64.5S0 100.122 0 64.5 28.878 0 64.5 0 129 28.878 129 64.5z"
      />
      <path
        fill="white"
        d="M84.917 87.531L55.08 37.963a2 2 0 01-.058-1.96l3.308-6.316c.728-1.39 2.7-1.438 3.495-.086l32.9 55.884c.785 1.334-.176 3.015-1.723 3.015H86.63a2 2 0 01-1.714-.969zM32.738 86.498l18.65-32.215a2 2 0 013.396-.107l3.52 5.28a2 2 0 01.058 2.125L49.28 76.984C48.492 78.317 49.454 80 51 80h17.897a2 2 0 011.69.932l3.474 5.5c.841 1.332-.115 3.068-1.69 3.068H34.468c-1.54 0-2.503-1.669-1.731-3.002z"
      />
    </svg>
  );
}

function SVGLogoV3() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M60 113.955C89.7984 113.955 113.955 89.7984 113.955 60C113.955 30.2017 89.7984 6.04534 60 6.04534C30.2017 6.04534 6.04534 30.2017 6.04534 60C6.04534 89.7984 30.2017 113.955 60 113.955ZM60 120C93.1372 120 120 93.1372 120 60C120 26.8629 93.1372 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1372 26.8629 120 60 120Z" fill="black" />
      <path fillRule="evenodd" clipRule="evenodd" d="M38.5041 23.2896C40.4582 20.0465 45.2126 20.2052 46.9461 23.5714L64.0435 56.7721L78.5372 25.9042C79.3343 24.207 81.0403 23.1234 82.9149 23.1234H105.944C107.614 23.1234 108.967 24.4767 108.967 26.1461C108.967 27.8155 107.614 29.1688 105.944 29.1688H83.683L67.5368 63.5559L83.6062 94.7607H102.771C104.44 94.7607 105.793 96.114 105.793 97.7834C105.793 99.4528 104.44 100.806 102.771 100.806H82.869C81.0578 100.806 79.3987 99.7941 78.5692 98.1839L64.2938 70.4627L58.1544 83.5375C56.4258 87.2194 51.2005 87.2524 49.4253 83.5929L41.3151 66.8717L22.84 98.526C21.1242 101.466 16.989 101.76 14.8739 99.0934L9.69169 92.5593C9.4779 92.2897 9.29346 91.998 9.14154 91.6894L4.97932 83.2307C4.25267 81.7539 4.32691 80.0089 5.17631 78.5994L38.5041 23.2896ZM60.8005 63.6789L42.5635 28.2657L10.695 81.1539L14.5086 88.9043L18.5108 93.9503L37.237 61.8665C39.1872 58.5249 44.0767 58.7127 45.7651 62.1939L53.7592 78.6753L60.8005 63.6789Z" fill="black" />
    </svg>

  );
}

export default function Logo() {
  return (
    <div className="inline p-3">
      <Link href="/" passHref>
        <a>
          <SVGLogoV3 />
        </a>
      </Link>
    </div>
  );
}
