import { isNumber } from '@/lib/parserTypes';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST({ json }: Request) {
  const { product_id } = await json();
  console.log({ product_id });

  if (product_id && isNumber(product_id)) {
    await prisma.rating.delete({
      where: { product_id },
    });
    const product = await prisma.product.delete({
      where: { product_id },
    });

    revalidatePath('/productos', 'layout');
    return NextResponse.json(product);
  }

  return NextResponse.json({ error: 'Item not found' }, { status: 404 });
}
