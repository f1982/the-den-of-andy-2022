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
    <div className={cn('flex flex-col items-center justify-center mb-20', className)}>
      <Typography variant="h1" as="h1" highlight>{title}</Typography>
      <Typography variant="body">{description}</Typography>
    </div>
  );
}

export default PageTitle;