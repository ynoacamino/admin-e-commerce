import { Button } from '@/components/ui/button';
import BackButton from '@/components/ui/BackButton';
import ModalLayout from '@/components/ui/modalLayout';

import { ScrollArea } from '@/components/ui/scroll-area';
import ProductForm from '@/components/form/ProductForm';

import { action } from './action';

export default function NewProductPage() {
  return (
    <ModalLayout>
      <header className="flex flex-col mb-4">
        <h1
          className="text-2xl font-bold"
        >
          Añadir una nuevo producto
        </h1>
        <p>
          Añade un nuevo producto a tu tienda.
        </p>
      </header>
      <ScrollArea className="max-h-[75vh] px-6">
        <form action={action}>
          <ProductForm />
          <div className="w-full flex justify-end gap-4 mt-4">
            <BackButton
              variant="outline"
              type="button"
            >
              Cancelar
            </BackButton>
            <Button type="submit">Guardar cambios</Button>
          </div>
        </form>
      </ScrollArea>
    </ModalLayout>
  );
}
