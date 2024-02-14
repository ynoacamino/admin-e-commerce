import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Link from '@/components/ui/link';

export default function BrandCard({
  brand_name, brand_id,
}: {
  brand_name: string, brand_id: number,
}) {
  return (
    <Card key={crypto.randomUUID()}>
      <CardHeader className="sm:p-6 p-3">
        <CardTitle className="text-wrap text-base">
          {brand_name}
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex gap-4 md:justify-start justify-center">
        <Link variants="default" href={`/marcas/editar/${brand_id}`}>
          Editar
        </Link>
        <Link variants="warning" href={`/marcas/eliminar/${brand_id}`}>
          Eliminar
        </Link>
      </CardFooter>
    </Card>
  );
}
