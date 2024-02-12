'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { useRouter } from 'next/navigation';

export default function DeleteProductPage() {
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

  return (
    <Dialog open={open} onOpenChange={handdleClose}>
      <DialogContent className="w-full m-6 max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Eliminar Producto
          </DialogTitle>
          <DialogDescription>
            Eliminar un producto de manera permanente.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            type="button"
            onClick={handdleCancel}
          >
            Cancelar
          </Button>
          <Button type="button" variant="destructive">Eliminar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
