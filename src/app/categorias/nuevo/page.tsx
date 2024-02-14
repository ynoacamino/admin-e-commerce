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
import { extractCategoryForm } from '@/lib/utils';
import axios from 'axios';
import { useDialog } from '@/lib/hooks';

import CategoryForm from '@/components/form/CategoryForm';
import { isNewCategory } from '@/types/Category/ParseCategory';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

export default function NewCategoryPage() {
  const { toast } = useToast();
  const router = useRouter();
  const { handdleCancel, handdleClose, open } = useDialog({ callbackUrl: '/categorias' });

  const handdleSubmit:FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = extractCategoryForm(formData);

    if (!isNewCategory(data)) {
      console.error('Invalid form values');
      return;
    }

    axios.post('/api/category/create', data)
      .then(() => {
        toast({
          title: 'Categoria guardada',
          description: 'La categoria se guardo correctamente',
          variant: 'default',
        });
        router.prefetch('/categorias');
        router.push('/categorias');
      })
      .catch(() => {
        toast({
          title: 'Error al guardar',
          description: 'Ocurrio un error al guardar la categoria, intenta de nuevo o mas tarde',
          variant: 'destructive',
        });
      });
  };

  return (
    <Dialog open={open} onOpenChange={handdleClose}>
      <DialogContent className="w-full m-6 max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Nueva Categoria
          </DialogTitle>
          <DialogDescription>
            Crea una nueva categoria para tu tienda
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] px-6">
          <form onSubmit={handdleSubmit}>
            <CategoryForm />
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
