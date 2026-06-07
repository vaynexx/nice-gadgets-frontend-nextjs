import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/lib/utils';

type H4Props = ComponentPropsWithoutRef<'h4'>;

export const H4 = ({ className, children, ...props }: H4Props) => {
  return (
    <h4
      className={cn(
        'text-[16px] leading-[20px] font-semibold md:text-[20px] md:leading-[26px]',
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
};
