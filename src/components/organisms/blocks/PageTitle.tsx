import cn from 'classnames';
import React from 'react';
import Typography from '../../atoms/typography/Typography';

interface PageTitleProps {
  title: string,
  description: string,
  className?: string,
}

function PageTitle({ title, description, className }: PageTitleProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center mb-8 md:mb-16', className)}>
      <Typography variant="h1" as="h1" className="page-title" highlight>{title}</Typography>
      <Typography variant="body" className="page-description">{description}</Typography>
    </div>
  );
}

export default PageTitle;