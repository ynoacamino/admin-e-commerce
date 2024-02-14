import ManagerLayout from '@/components/ManagerLayout';
import BrandCard from '@/components/ui/BrandCard';

export default function ProductosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ManagerLayout
        title="Marcas"
        newButtonName="Nueva marca"
        newButtonHref="/marcas/nuevo"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {
          Array.from({ length: 10 }).map(() => (
            <BrandCard
              key={crypto.randomUUID()}
              brand_id={1}
              brand_name="Smartwatch HUAWEI Watch Fit 2 Rosado"
            />
          ))
          }
        </div>
      </ManagerLayout>
      {children}
    </>

  );
}
