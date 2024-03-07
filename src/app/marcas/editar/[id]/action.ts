import { redirect } from 'next/navigation';

export const action = async (formData: FormData) => {
  'use server';

  const id = formData.get('brand_id');
  const brand_name = formData.get('brand_name');

  const response = await fetch('http://localhost:3001/api/brand/update', {
    method: 'POST',
    body: JSON.stringify({ brand_id: Number(id), brand_name }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status !== 200) {
    return {
      errors: 'Error al editar la marca',
    };
  }

  redirect('/marcas');
  return {};
};
