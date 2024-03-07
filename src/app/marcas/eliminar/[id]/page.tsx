import ModalLayout from '@/components/ui/modalLayout';
import BackButton from '@/components/ui/BackButton';
import { Button } from '@/components/ui/button';
import { action } from './action';

export default function DeleteBrandPage({ params } : { params: { id: string } }) {
  return (
    <ModalLayout>
      <header className="flex flex-col mb-4">
        <h1
          className="text-2xl font-bold"
        >
          Eliminar marca
        </h1>
        <p>
          ¿Estás seguro de que quieres eliminar esta marca?
        </p>
      </header>
      <form action={action}>
        <input type="hidden" name="brand_id" value={params.id} />
        <div className="w-full flex justify-end gap-4 mt-4">
          <BackButton
            variant="outline"
            type="button"
          >
            Cancelar
          </BackButton>
          <Button type="submit" variant="destructive">Eliminar</Button>
        </div>
      </form>
    </ModalLayout>
  );
}
