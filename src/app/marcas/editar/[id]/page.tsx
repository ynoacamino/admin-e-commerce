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

import { ScrollArea } from '@/components/ui/scroll-area';
import axios from 'axios';
import { useDialog } from '@/lib/hooks';

import BrandForm from '@/components/form/BrandForm';
import { extractBrandForm } from '@/lib/utils';
import { isUpdateBrand } from '@/types/Brand/ParseBrand';
import { UpdateBrand } from '@/types/Brand/Brand';

export default function EditBrandPage() {
  const { handdleCancel, handdleClose, open } = useDialog({ callbackUrl: '/marcas' });

  const handdleSubmit:FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const ID = 1;

    const formData = new FormData(e.currentTarget);
    const data = extractBrandForm(formData) as UpdateBrand;

    data.brand_id = ID;

    if (!isUpdateBrand(data)) {
      console.error('Invalid form values');
      return;
    }

    axios.post('/api/brand/update', { ...data, brand_id: ID })
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
            Edita una Marca
          </DialogTitle>
          <DialogDescription>
            Edita una marca para tu tienda
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] px-6">
          <form onSubmit={handdleSubmit}>
            <BrandForm />
            <DialogFooter className="mt-4">
              <Button
                variant="outline"
                type="button"
                onClick={handdleCancel}
              >
                Cancelar
              </Button>
              <Button type="submit">Guardar cambios</Button>
            </DialogFooter>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
