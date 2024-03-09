import ManagerLayout from '@/components/ManagerLayout';
import ProductCard from '@/components/ui/ProductCard';
import { PopultedProduct } from '@/types/Product/Product';

const getProducts = async () => {
  try {
    const response = await fetch(`${process.env.URL_API}/api/product/read`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
    const data = await response.json();
    return data as PopultedProduct[];
  } catch (error) {
    console.error('Error:', error);
    return [] as PopultedProduct[];
  }
};

export default async function ProductosLayout({ children }: { children: React.ReactNode }) {
  const data = await getProducts();
  return (
    <>
      <ManagerLayout
        title="Productos"
        newButtonName="Nuevo Producto"
        newButtonHref="/productos/nuevo"
      >
        {
          data.map((product) => (
            <ProductCard
              key={product.product_id}
              product_brand={product.brand.brand_name}
              product_id={product.product_id}
              product_image={product.product_image}
              product_name={product.product_name}
              product_price={product.product_price}
            />
          ))
        }
      </ManagerLayout>
      {children}
    </>

  );
}
