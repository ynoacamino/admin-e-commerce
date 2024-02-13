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

import { ScrollArea } from '@/components/ui/scroll-area';
import { useDialog } from '@/lib/hooks';
import EditProductForm from './EditProductForm';

export default function EditProductPage() {
  const { handdleCancel, handdleClose, open } = useDialog();

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
