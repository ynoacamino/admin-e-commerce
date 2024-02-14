import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { NewProduct } from '@/types/Product/Product';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractProductForm(formData: FormData): NewProduct | null {
  const values: any = Object.fromEntries(formData);
  const tags = Array.from(formData.entries())
    .filter((pair) => pair[0] === 'tag_id')
    .map((pair) => pair[1]);

  values.tags = tags;

  values.tags = values.tags.map(Number);

  values.category_id = Number(values.category_id);
  values.brand_id = Number(values.brand_id);
  values.product_price = Number(values.product_price);
  values.product_stock = Number(values.product_stock);

  return values;
}

export const extractCategoryForm = (formData: FormData): unknown => {
  const values: any = Object.fromEntries(formData);
  if ('category_id' in values) values.category_id = Number(values.category_id);

  return values;
};

export const extractBrandForm = (formData: FormData): unknown => {
  const values: any = Object.fromEntries(formData);
  if ('brand_id' in values) values.brand_id = Number(values.brand_id);

  return values;
};
