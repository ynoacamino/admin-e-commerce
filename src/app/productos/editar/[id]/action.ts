import { redirect } from 'next/navigation';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1707841235/tnqnayhbiwuxst804bci.webp';

export const action = async (formData: FormData) => {
  'use server';

  const product_id = Number(formData.get('product_id'));
  const product_name = formData.get('product_name');
  const product_description = formData.get('product_description');
  const product_price = Number(formData.get('product_price'));
  const product_stock = Number(formData.get('product_stock'));
  const product_category = Number(formData.get('product_category'));
  const product_brand = Number(formData.get('product_brand'));

  const response = await fetch('http://localhost:3001/api/product/create', {
    method: 'POST',
    body: JSON.stringify({
      product_name,
      product_price,
      product_description,
      product_stock,
      category_id: product_category,
      brand_id: product_brand,
      tags: [],
      product_date: new Date(),
      product_id,
      product_image: DEFAULT_IMAGE,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status !== 200) {
    return {
      errors: 'Error al crear el producto',
    };
  }

  redirect('/productos');
  return {};
};
