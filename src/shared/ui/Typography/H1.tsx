import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/lib/utils';

type H1Props = ComponentPropsWithoutRef<'h1'>;

export const H1 = ({ className, children, ...props }: H1Props) => {
  return (
    <h1
      className={cn(
        'text-[32px] leading-[41px] font-bold tracking-[-0.01em] md:text-[48px] md:leading-[56px]',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
