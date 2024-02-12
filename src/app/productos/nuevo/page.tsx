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
import { ScrollArea } from '@/components/ui/scroll-area';
import EditProductForm from '../editar/[id]/EditProductForm';

export default function NewProductPage() {
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
            Editar Producto
          </DialogTitle>
          <DialogDescription>
            Edita la información del producto
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] px-6">
          <EditProductForm />
        </ScrollArea>
        <DialogFooter>
          <Button
            variant="outline"
            type="button"
            onClick={handdleCancel}
          >
            Cancelar
          </Button>
          <Button type="button">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
