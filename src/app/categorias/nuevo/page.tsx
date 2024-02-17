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
import { useDialog } from '@/lib/hooks';

import CategoryForm from '@/components/form/CategoryForm';
import { isNewCategory } from '@/types/Category/ParseCategory';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

export default function NewCategoryPage() {
  const { toast } = useToast();
  const router = useRouter();
  const { handdleCancel, handdleClose, open } = useDialog({ callbackUrl: '/categorias' });

  const handdleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = extractCategoryForm(formData);

    if (!isNewCategory(data)) {
      console.error('Invalid form values');
      return;
    }

    try {
      const res = await fetch('/api/category/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Network response was not ok');

      toast({
        title: 'Categoria guardada',
        description: 'La categoria se guardo correctamente',
        variant: 'default',
      });
    } catch (err) {
      toast({
        title: 'Error al guardar',
        description: 'Ocurrio un error al guardar la categoria, intenta de nuevo o mas tarde',
        variant: 'destructive',
      });
    }

    router.refresh();
    router.push('/categorias');
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
