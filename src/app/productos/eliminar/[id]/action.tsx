import { redirect } from 'next/navigation';

export const action = async (formData: FormData) => {
  'use server';

  const id = formData.get('product_id');
  console.log({ id });
  const response = await fetch('http://localhost:3001/api/product/delete', {
    method: 'POST',
    body: JSON.stringify({ product_id: Number(id) }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status !== 200) {
    console.error('Error al eliminar el producto');
    return {
      errors: 'Error al eliminar el producto',
    };
  }

  redirect('/productos');
  return {};
};
