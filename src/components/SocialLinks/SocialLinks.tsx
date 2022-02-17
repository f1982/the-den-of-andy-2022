import Link from 'next/link';
import classNames from 'classnames';
import LinkItem from './LinkItem';
import { SNS } from '../../constants/links';

export default function SocialLinks() {
  return (
    <ul className={classNames(
      'inline-flex',
      'sm:ml-auto',
      'sm:mt-0',
      'mt-4',
      'justify-center',
      'sm:justify-start',
    )}
    >
      {
        SNS.filter((item) => item.hidden === 0).map((item) => (
          <li key={item.id} className="pr-2 last:pr-0">
            <LinkItem link={item.link} alt={item.alt}>
              {item.icon}
            </LinkItem>
          </li>
        ))
      }
    </ul>
  );
}
