'use client';

/* eslint-disable no-restricted-syntax */

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

import { ScrollArea } from '@/components/ui/scroll-area';
import { extractCategoryForm } from '@/lib/utils';
import axios from 'axios';
import { useDialog } from '@/lib/hooks';
import { isNewProduct } from '@/types/Product/ParseProduct';
import EditProductForm from '../editar/[id]/EditProductForm';

export default function NewProductPage() {
  const { handdleCancel, handdleClose, open } = useDialog({ callbackUrl: '/productos' });

  const handdleSubmit:FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = extractCategoryForm(formData);

    if (!isNewProduct(data)) {
      console.error('Invalid form values');
      return;
    }

    console.log(data);
    axios.post('/api/product/create', data)
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
            Nuevo Producto
          </DialogTitle>
          <DialogDescription>
            Crea un nuevo producto para tu tienda
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] px-6">
          <form onSubmit={handdleSubmit}>
            <EditProductForm />
            <DialogFooter className="mt-4">
              <Button
                variant="outline"
                type="button"
                onClick={handdleCancel}
              >
                Cancelar
              </Button>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
