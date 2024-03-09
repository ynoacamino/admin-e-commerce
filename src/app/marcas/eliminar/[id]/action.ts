import { redirect } from 'next/navigation';

export const action = async (formData: FormData) => {
  'use server';

  const id = formData.get('brand_id');

  const response = await fetch(`${process.env.URL_API}/api/brand/delete`, {
    method: 'POST',
    body: JSON.stringify({ brand_id: Number(id) }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status !== 200) {
    return {
      errors: 'Error al eliminar la marca',
    };
  }

  redirect('/marcas');
  return {};
};
