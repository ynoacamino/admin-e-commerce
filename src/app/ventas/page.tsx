import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import ManagerLayout from '@/components/ManagerLayout';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';

const getUsers = async () => {
  const sales = await prisma?.cart.findMany({
    include: {
      product: true,
      user: true,
    },
  });

  return sales;
};

export default async function SalesPage() {
  const data = await getUsers();
  return (
    <ManagerLayout
      title="Ventas"
    >
      <div className="w-full flex flex-col my-10">
        <Table>
          <TableCaption>Lista de ventas</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">ID del usuario</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="w-[80px]">ID del producto</TableHead>
              <TableHead>Nombre del producto</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Cantidad</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(({
              product, user, cart_count,
            }) => (
              <TableRow key={crypto.randomUUID()}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{product.product_id}</TableCell>
                <TableCell>{product.product_name}</TableCell>
                <TableCell>{product.product_price}</TableCell>
                <TableCell>{cart_count}</TableCell>
                <TableCell>{product.product_price * cart_count}</TableCell>
                <TableCell>
                  <Button variant="destructive">
                    Cancelar
                  </Button>
                  <Button variant="secondary">
                    Aceptar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={7}>Numero de ventas</TableCell>
              <TableCell className="text-center">{data.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </ManagerLayout>
  );
}
