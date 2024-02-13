import ManagerLayout from '@/components/ManagerLayout';
import CategoryCard from '@/components/ui/CategoryCard';

export default function CategoriasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ManagerLayout
        title="Categorias"
        newButtonName="Nueva Categoria"
        newButtonHref="/categorias/nuevo"
      >
        {
          Array.from({ length: 10 }).map((_, index) => (
            <CategoryCard
              key={crypto.randomUUID()}
              category_id={index}
              category_name="Categoria 1"
              category_description="Descripcion de la categoria 1, aqui se puede agregar una descripcion mas larga para que se pueda ver el comportamiento del texto en el componente."
            />
          ))
        }
      </ManagerLayout>
      {children}
    </>
  );
}
