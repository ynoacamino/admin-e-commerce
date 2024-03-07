import ManagerLayout from '@/components/ManagerLayout';
import CategoryCard from '@/components/ui/CategoryCard';
import { Category } from '@prisma/client';
// import { prisma } from '@/lib/prisma';

const getCategoriesData = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/category/read', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
  // const categories = await prisma.category.findMany();
  // return categories;
};

export default async function CategoriasLayout({ children }: { children: React.ReactNode }) {
  const categories: Category[] = await getCategoriesData();
  return (
    <>
      <ManagerLayout
        title="Categorias"
        newButtonName="Nueva Categoria"
        newButtonHref="/categorias/nuevo"
      >
        {
          categories.map(({ category_description, category_id, category_name }) => (
            <CategoryCard
              key={crypto.randomUUID()}
              category_id={category_id}
              category_name={category_name}
              category_description={category_description}
            />
          ))
        }
      </ManagerLayout>
      {children}
    </>
  );
}
