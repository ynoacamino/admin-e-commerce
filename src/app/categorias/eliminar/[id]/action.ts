import axios from 'axios';
import { redirect } from 'next/navigation';

export const action = async (formData: FormData) => {
  'use server';

  const id = formData.get('category_id');

  const response = await axios.post(`${process.env.URL_API}/api/category/delete`, { category_id: Number(id) });

  if (response.status !== 200) {
    throw new Error('Error deleting category');
  }

  redirect('/categorias');
};
