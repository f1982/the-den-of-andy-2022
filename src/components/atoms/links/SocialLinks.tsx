import classNames from 'classnames';
import { SNS } from '../../../constants/links';
import LinkItem from './LinkItem';

export default function SocialLinks() {
  return (
    <ul className={classNames(
      'sm:ml-auto',
      'sm:mt-0',
      'mt-4',
      'flex',
    )}
    >
      {
        SNS.filter((item) => item.hidden === 0).map((item) => (
          <li key={item.id} className="pr-2 last:pr-0 w-8">
            <LinkItem link={item.link} alt={item.alt}>
              {item.icon}
            </LinkItem>
          </li>
        ))
      }
    </ul>
  );
}