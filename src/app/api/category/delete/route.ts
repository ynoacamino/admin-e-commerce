import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { isNumber } from '@/lib/parserTypes';
import { revalidatePath } from 'next/cache';

export async function POST({ json }: Request) {
  const { category_id } = await json();

  if (category_id && isNumber(category_id)) {
    const category = await prisma.category.delete({ where: { category_id } });

    revalidatePath('/categorias', 'layout');
    return NextResponse.json(category);
  }

  return NextResponse.json({ error: 'Category not found' }, { status: 404 });
}
