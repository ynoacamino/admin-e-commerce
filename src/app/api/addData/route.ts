import { faker } from '@faker-js/faker';
import { prisma } from '@/lib/prisma';

const number_brands = 10;
const number_categories = 5;
const number_products = 100;
const number_users = 30;

export async function POST() {
  // const product: Product = {
  //   product_date: new Date(),
  //   product_name: faker.commerce.productName(),
  //   product_description: faker.commerce.productDescription(),
  //   product_price: faker.number.int({ min: 1, max: 1000 }),
  //   product_stock: faker.number.int({ min: 1, max: 1000 }),
  //   product_image: faker.image.url({ width: 600, height: 600 }),
  // };

  // const category: Category = {
  //   category_description: faker.commerce.department(),
  //   category_name: faker.commerce.department(),
  // };

  // const brand: Brand = {
  //   brand_name: faker.company.name(),
  // };

  // const user: User = {
  //   email: faker.internet.email(),
  //   image: faker.image.avatar(),
  //   name: faker.internet.displayName(),
  // };

  await prisma.brand.createMany({
    data: Array.from({ length: number_brands }, () => ({
      brand_name: faker.company.name(),
    })),
  });

  await prisma.category.createMany({
    data: Array.from({ length: number_categories }, () => ({
      category_description: faker.commerce.department(),
      category_name: faker.commerce.department(),
    })),
  });

  await prisma.user.createMany({
    data: Array.from({ length: number_users }, () => ({
      email: faker.internet.email(),
      image: faker.image.avatar(),
      name: faker.internet.displayName(),
    })),
  });

  return Response.json({ message: 'Data added' });
}

export async function PUT() {
  const data = await prisma.product.createMany({
    data: Array.from({ length: number_products }, () => ({
      product_date: new Date(),
      product_name: faker.commerce.productName(),
      product_description: faker.commerce.productDescription(),
      product_price: faker.number.int({ min: 1, max: 1000 }),
      product_stock: faker.number.int({ min: 1, max: 1000 }),
      product_image: faker.image.url({ width: 600, height: 600 }),
      brand_id: faker.number.int({ min: 1, max: number_brands }),
      category_id: faker.number.int({ min: 1, max: number_categories }),
    })),
  });

  return Response.json({ message: 'Data added', data });
}

export async function GET() {
  const rating = await prisma.rating.createMany({
    data: Array.from({ length: number_products }, (_, i) => ({
      product_id: i + 1,
      rating_count: faker.number.int({ min: 1, max: 100 }),
      rating_rate: faker.number.float({ min: 1, max: 5 }),
    })),
  });

  return Response.json({ message: 'Data added', data: rating });
}
