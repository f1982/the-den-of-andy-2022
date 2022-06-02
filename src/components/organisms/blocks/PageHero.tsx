
import cn from 'classnames';
import React, { PropsWithChildren } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config';

interface PageHeroProps {
  image?: string,
}

function PageHero({ image, children }: PropsWithChildren<PageHeroProps>) {
  const fullConfig = resolveConfig(tailwindConfig);
  const primary = fullConfig.theme.colors.primary.medium;

  return (
    <div
      className={cn(
        'mb-12',
        // 'h-[600px]',
        'flex flex-col',
      )}
      style={{
        backgroundPosition: '15px 0, 45px 0, 0 0, 0 0',
        backgroundSize: '30px 60px',
        background: `linear-gradient(0deg, ${primary} 25%, transparent 25%)`,
      }}
    >
      <div className="flex-1" />
      <div
        className={cn(
          'container mx-auto',
          'flex flex-col items-center',
        )}
      >
        {!!image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className={cn(
              'mt-10',
              'md:mt-32',
              'w-full',
              'md:max-w-xl',
              // 'bg-primary-light',
              // 'md:bg-secondary-light',
            )}
            src={image}
            alt="andy"
          />
        )}
        {children}
      </div>
    </div>
  );
}

export default PageHero;
