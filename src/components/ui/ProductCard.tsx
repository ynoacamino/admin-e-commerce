import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Link from '@/components/ui/link';

export default function ProductCard({
  product_name, product_price, product_image, product_brand, product_id,
}: {
  product_name: string,
  product_price: number,
  product_image: string,
  product_brand: string,
  product_id: number
}) {
  return (
    <Card className="flex md:flex-row justify-between items-center flex-col-reverse" key={crypto.randomUUID()}>
      <div className="flex-1">
        <CardHeader className="sm:p-6 p-3">
          <CardTitle className="text-wrap text-base">
            {product_name}
          </CardTitle>
          <CardDescription>
            {product_brand}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold">
            S/
            {' '}
            {product_price.toFixed(2)}
          </p>
          <p className="line-through">
            S/
            {' '}
            {(product_price + 10).toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="flex gap-4 md:justify-start justify-center">
          <Link scroll={false} variants="default" href={`/productos/editar/${product_id}`}>
            Editar
          </Link>
          <Link scroll={false} variants="warning" href={`/productos/eliminar/${product_id}`}>
            Eliminar
          </Link>
        </CardFooter>
      </div>
      <Image
        alt="Card Image"
        src={product_image}
        height={300}
        width={300}
        className="w-52 h-52 border-border border-[1px] m-5"
        priority
      />
    </Card>
  );
}
