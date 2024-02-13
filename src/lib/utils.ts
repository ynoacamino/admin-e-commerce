import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { isNewProduct } from '@/types/Product/ParseProduct';
import { NewProduct } from '@/types/Product/Product';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractForm(formData: FormData): NewProduct | null {
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

  console.log(values);

  if (!isNewProduct(values)) {
    console.error('Invalid form values');
    return null;
  }

  return values;
}
