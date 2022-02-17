import cn from 'classnames';
import { EXAMPLE_PATH } from '../../config/constants';

export default function AlertBar({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-error border-accent-7 text-on-error': preview,
        'bg-error border-accent-2': !preview,
      })}
    >
      <div className="container mx-auto px-5">
        <div className="py-2 text-center text-sm text-on-error">
          {preview ? (
            <>
              This page is a preview.
              {' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>
              {' '}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is
              {' '}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </div>
    </div>
  );
}
