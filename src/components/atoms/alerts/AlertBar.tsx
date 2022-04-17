import React from 'react';
import cn from 'classnames';

export enum AlertType{
  Warning = 'Warning',
  Error = 'Error'
}

export interface AlertBarProps {
  preview: boolean;
  type?: AlertType;
  children: React.ReactNode;
}

function AlertBar({ preview, type = AlertType.Warning, children }: AlertBarProps) {
  return (
    <div
      className={cn('border-b', {
        'bg-error border-accent-7 text-on-error': type === AlertType.Error,
        'bg-warning border-accent-2 text-on-warning': type === AlertType.Warning,
      })}
    >
      <div className="container mx-auto px-5 ">
        <div className="py-2 text-primary text-center text-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AlertBar;
