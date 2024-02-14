'use client';

import { FormEventHandler } from 'react';

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
import axios from 'axios';

export default function DeleteCategoryPage() {
  const { handdleCancel, handdleClose, open } = useDialog({ callbackUrl: '/categorias' });

  const ID = 1;

  const handdleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    axios.post('/api/category/delete', { category_id: ID })
      .then(() => console.log('succes'))
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <Dialog open={open} onOpenChange={handdleClose}>
      <DialogContent className="w-full m-6 max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Eliminar Categoria
          </DialogTitle>
          <DialogDescription>
            Eliminar una categoria de manera permanente.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handdleSubmit}>
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
        </form>
      </DialogContent>
    </Dialog>
  );
}
