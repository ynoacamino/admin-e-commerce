'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { useDialog } from '@/lib/hooks';

export default function DeleteProductPage() {
  const { handdleCancel, handdleClose, open } = useDialog();

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
