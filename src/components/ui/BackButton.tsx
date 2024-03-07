'use client';

import { RefAttributes } from 'react';
import { useRouter } from 'next/navigation';
import { Button, ButtonProps } from './button';

export default function BackButton(
  { children, ...props }
  :
  ButtonProps & RefAttributes<HTMLButtonElement>,
) {
  const router = useRouter();
  return (
    <Button {...props} onClick={router.back}>
      {children}
    </Button>
  );
}
