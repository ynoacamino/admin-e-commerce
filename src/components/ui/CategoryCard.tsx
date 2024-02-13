import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Link from '@/components/ui/link';

export default function CategoryCard({
  category_name, category_id, category_description,
}: {
  category_name: string, category_id: number, category_description: string
}) {
  return (
    <Card key={crypto.randomUUID()}>
      <CardHeader className="sm:p-6 p-3">
        <CardTitle className="text-wrap text-base">
          {category_name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {category_description}
      </CardContent>
      <CardFooter className="flex gap-4 md:justify-start justify-center">
        <Link variants="default" href={`/productos/editar/${category_id}`}>
          Editar
        </Link>
        <Link variants="warning" href={`/productos/eliminar/${category_id}`}>
          Eliminar
        </Link>
      </CardFooter>
    </Card>
  );
}
