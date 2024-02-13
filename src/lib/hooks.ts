import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useDialog = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setOpen(true);
  }, []);

  const handdleClose = (v:Boolean):void => {
    if (!v) {
      setOpen(false);
      router.push('/productos');
    }
  };

  const handdleCancel = ():void => {
    setOpen(false);
    router.push('/productos');
  };

  return {
    open,
    handdleClose,
    handdleCancel,
  };
};
