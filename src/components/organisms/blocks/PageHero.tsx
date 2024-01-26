import cn from 'classnames';
import React, { PropsWithChildren } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config';
import Image from '../../atoms/Image/Image';

interface PageHeroProps {
  image?: string;
  className?: string;
}

const PageHero: React.FC<PropsWithChildren<PageHeroProps>> = ({ image, children, className }) => {
  // get theme primary color from tailwind config
  // @ts-ignore
  const fullConfig = resolveConfig(tailwindConfig);
  // @ts-ignore
  const primary = fullConfig.theme.colors.primary.medium;

  return (
    <div
      className={cn('mb-12', 'flex flex-col', className)}
      style={{
        backgroundPosition: '15px 0, 45px 0, 0 0, 0 0',
        backgroundSize: '30px 60px',
        background: `linear-gradient(0deg, ${primary} 25%, transparent 25%)`,
      }}
    >
      <div className="flex-1" />
      <div className={cn('mt-8 md:mt-16')}>
        {!!image && <Image src={image} alt="hero image" className="h-[360px] md:h-[540px]" />}
        {/* {children} */}
      </div>
    </div>
  );
};

export default PageHero;
