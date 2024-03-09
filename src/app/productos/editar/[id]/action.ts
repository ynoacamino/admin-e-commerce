import { redirect } from 'next/navigation';

export const action = async (formData: FormData) => {
  'use server';

  const product_id = Number(formData.get('product_id'));
  const product_name = formData.get('product_name');
  const product_description = formData.get('product_description');
  const product_price = Number(formData.get('product_price'));
  const product_stock = Number(formData.get('product_stock'));
  const product_category = Number(formData.get('product_category'));
  const product_brand = Number(formData.get('product_brand'));
  const product_image = formData.get('product_image');

  const response = await fetch('http://localhost:3001/api/product/update', {
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
      product_image,
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
