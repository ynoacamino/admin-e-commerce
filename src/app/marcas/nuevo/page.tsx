import { Button } from '@/components/ui/button';

import { ScrollArea } from '@/components/ui/scroll-area';
import BrandForm from '@/components/form/BrandForm';
import ModalLayout from '@/components/ui/modalLayout';
import BackButton from '@/components/ui/BackButton';

import { action } from './action';

export default function NewBrandPage() {
  return (
    <ModalLayout>
      <header className="flex flex-col mb-4">
        <h1
          className="text-2xl font-bold"
        >
          Añadir una nueva categoria
        </h1>
        <p>
          Añade una nueva categoria a tu tienda.
        </p>
      </header>
      <ScrollArea className="max-h-[75vh] px-6">
        <form action={action}>
          <BrandForm />
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
