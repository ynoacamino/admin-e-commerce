import axios from 'axios';
import { redirect } from 'next/navigation';

export const action = async (formData: FormData) => {
  'use server';

  const brand_name = formData.get('brand_name');

  const response = await axios.post(`${process.env.URL_API}/api/brand/create`, { brand_name });

  if (response.status !== 200) {
    throw new Error('Error al crear la marca');
  }

  redirect('/marcas');
};
