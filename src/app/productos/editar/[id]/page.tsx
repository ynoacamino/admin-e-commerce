import { Button } from '@/components/ui/button';
import BackButton from '@/components/ui/BackButton';
import ModalLayout from '@/components/ui/modalLayout';
import { ScrollArea } from '@/components/ui/scroll-area';

import ProductForm from '@/components/form/ProductForm';

import { PopultedProduct } from '@/types/Product/Product';
import { action } from './action';

const getProduct = async (id: string) => {
  const product_id = Number(id);

  try {
    const response = await fetch(`${process.env.URL_API}/api/product/read`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product_id }),
    });
    const data = await response.json();
    return data as PopultedProduct;
  } catch (error) {
    return null;
  }
};

export default async function EditProductPage({ params } : { params: { id: string } }) {
  const data = await getProduct(params.id);
  return (
    <ModalLayout>
      <header className="flex flex-col mb-4">
        <h1
          className="text-2xl font-bold"
        >
          Editar producto
        </h1>
        <p>
          Modifica los datos del producto.
        </p>
      </header>
      <ScrollArea className="max-h-[75vh] px-6">
        <form action={action}>
          <input type="hidden" name="product_id" value={data?.product_id} />
          <ProductForm
            key={data?.product_id}
            product_name={data?.product_name}
            product_description={data?.product_description}
            product_price={data?.product_price}
            product_stock={data?.product_stock}
            product_brand={String(data?.brand.brand_id)}
            product_category={String(data?.category.category_id)}
            product_image={data?.product_image}
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
