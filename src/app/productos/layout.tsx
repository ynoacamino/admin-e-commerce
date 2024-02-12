import Image from 'next/image';

import H1 from '@/components/ui/H1';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from '@/components/ui/link';

export default function ProductosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="p-6">
        <H1>
          Productos
        </H1>
        <div className="pb-4">
          <Link variants="default" href="/productos/nuevo">
            <span className="text-xl mr-2">+</span>
            Nuevo Producto
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {
          Array.from({ length: 10 }).map(() => (
            <Card className="flex md:flex-row justify-between items-center flex-col-reverse" key={crypto.randomUUID()}>
              <div className="flex-1">
                <CardHeader className="sm:p-6 p-3">
                  <CardTitle className="text-wrap text-base">
                    Smartwatch HUAWEI Watch Fit 2 Rosado
                  </CardTitle>
                  <CardDescription>
                    Brand Item
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">
                    S/ 239
                  </p>
                  <p className="line-through">
                    S/ 299
                  </p>
                </CardContent>
                <CardFooter className="flex gap-4 md:justify-start justify-center">
                  <Link variants="default" href="/productos/editar/1">
                    Editar
                  </Link>
                  <Link variants="warning" href="/productos/eliminar/1">
                    Eliminar
                  </Link>
                </CardFooter>
              </div>
              <Image
                alt="Card Image"
                src="https://res.cloudinary.com/dazt6g3o1/image/upload/v1707404432/u12uoxlhzpm927slfy24.png"
                height={300}
                width={300}
                className="w-52 h-52 border-border border-[1px] m-5"
              />
            </Card>
          ))
        }

        </div>
      </main>
      {children}
    </>

  );
}
