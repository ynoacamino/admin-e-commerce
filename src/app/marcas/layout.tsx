import ManagerLayout from '@/components/ManagerLayout';
import BrandCard from '@/components/ui/BrandCard';
import { Brand } from '@prisma/client';

const getData = async () => {
  try {
    const response = await fetch(`${process.env.URL_API}/api/brand/read`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
    const data = await response.json();
    return data as Brand[];
  } catch (error) {
    return [];
  }
};

export default async function ProductosLayout({ children }: { children: React.ReactNode }) {
  const data = await getData();
  return (
    <>
      <ManagerLayout
        title="Marcas"
        newButtonName="Nueva marca"
        newButtonHref="/marcas/nuevo"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {
            data.map((brand) => (
              <BrandCard
                key={brand.brand_id}
                brand_name={brand.brand_name}
                brand_id={brand.brand_id}
              />
            ))
          }
        </div>
      </ManagerLayout>
      {children}
    </>

  );
}
