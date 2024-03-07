import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

import CategoryForm from '@/components/form/CategoryForm';
import ModalLayout from '@/components/ui/modalLayout';
import BackButton from '@/components/ui/BackButton';
import { action } from './action';

export default function NewCategoryPage() {
  return (
    <ModalLayout>
      <ScrollArea className="max-h-[60vh]">
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
        <form action={action}>
          <CategoryForm />
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
