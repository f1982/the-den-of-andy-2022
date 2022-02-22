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

export default function Logo() {
  return (
    <div className="inline p-3">
      <Link href="/" passHref>
        <a>
          <SVGLogoV2 />
        </a>
      </Link>
    </div>
  );
}
