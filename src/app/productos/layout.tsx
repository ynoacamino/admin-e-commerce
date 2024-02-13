import ManagerLayout from '@/components/ManagerLayout';
import ProductCard from '@/components/ui/ProductCard';

export default function ProductosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ManagerLayout
        title="Productos"
        newButtonName="Nuevo Producto"
        newButtonHref="/productos/nuevo"
      >
        {
          Array.from({ length: 10 }).map(() => (
            <ProductCard
              key={crypto.randomUUID()}
              product_brand="Brand Item"
              product_id={1}
              product_image=""
              product_name="Smartwatch HUAWEI Watch Fit 2 Rosado"
              product_price={239}
            />
          ))
        }
      </ManagerLayout>
      {children}
    </>

  );
}
