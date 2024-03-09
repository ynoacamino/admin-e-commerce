import axios from 'axios';
import { redirect } from 'next/navigation';

export const action = async (formData: FormData) => {
  'use server';

  const category_name = formData.get('category_name');
  const category_description = formData.get('category_description');

  const response = await axios.post(`${process.env.URL_API}/api/category/create`, {
    category_name,
    category_description,
  });

  if (response.status !== 200) {
    throw new Error('Error creating category');
  }

  redirect('/categorias');
};
