import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { isNewBrand } from '@/types/Brand/ParseBrand';
import { revalidatePath } from 'next/cache';

export async function POST({ json }: Request) {
  const newBrand = await json();

  if (!isNewBrand(newBrand)) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const { brand_name } = newBrand;

  const brand = await prisma.brand.create({
    data: {
      brand_name,
    },
  });

  revalidatePath('/marcas', 'layout');
  return NextResponse.json(brand);
}
