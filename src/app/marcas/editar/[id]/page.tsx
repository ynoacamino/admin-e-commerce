import ModalLayout from '@/components/ui/modalLayout';
import BackButton from '@/components/ui/BackButton';
import { ScrollArea } from '@/components/ui/scroll-area';
import BrandForm from '@/components/form/BrandForm';
import { Button } from '@/components/ui/button';
import { Brand } from '@prisma/client';
import { action } from './action';

export const revalidate = 0;

const getData = async (id: string) => {
  const brand_id = Number(id);

  try {
    const response = await fetch('http://localhost:3001/api/brand/read', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ brand_id }),
    });
    const data = await response.json();
    return data as Brand;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default async function EditBrandPage({ params } : { params: { id: string } }) {
  const data = await getData(params.id);
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
      <ScrollArea className="max-h-[60vh]">
        <form action={action}>
          <input type="hidden" name="brand_id" value={params.id} />
          <BrandForm brand_name={data?.brand_name} />
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
