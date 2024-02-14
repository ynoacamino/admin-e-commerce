import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useDialog = ({ callbackUrl }: { callbackUrl: string }) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setOpen(true);
  }, []);

  const handdleClose = (v:Boolean):void => {
    if (!v) {
      setOpen(false);
      router.push(callbackUrl);
    }
  };

  const handdleCancel = ():void => {
    setOpen(false);
    router.push(callbackUrl);
  };

  return {
    open,
    handdleClose,
    handdleCancel,
  };
};
