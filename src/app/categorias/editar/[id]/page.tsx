import { ScrollArea } from '@/components/ui/scroll-area';
import CategoryForm from '@/components/form/CategoryForm';
import { Button } from '@/components/ui/button';

import ModalLayout from '@/components/ui/modalLayout';
import { Category } from '@prisma/client';
import BackButton from '@/components/ui/BackButton';
import { action } from './action';

const getData = async (id: string) => {
  try {
    const response = await fetch(`${process.env.URL_API}/api/category/read`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category_id: Number(id) }),
    });
    const data = await response.json();
    return data as Category;
  } catch (error) {
    return null;
  }
};

export default async function EditCategoryPage({ params } : { params: { id: string } }) {
  const data = await getData(params.id);
  return (
    <ModalLayout>
      <ScrollArea className="max-h-[75vh]">
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
          <input type="hidden" name="category_id" value={params.id} />
          <CategoryForm
            category_description={data?.category_description}
            category_name={data?.category_name}
          />
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
