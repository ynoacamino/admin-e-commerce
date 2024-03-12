import Image from 'next/image';
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

const getUsers = async () => {
  const users = await prisma?.user.findMany();

  return users;
};

export default async function UsersPage() {
  const data = await getUsers();
  return (
    <ManagerLayout
      title="Usuarios"
    >
      <div className="w-full flex flex-col my-10">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">ID</TableHead>
              <TableHead>Email</TableHead>
              {/* <TableHead>Image Url</TableHead> */}
              <TableHead>Name</TableHead>
              <TableHead className="w-[50px]">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(({
              email, image, name, user_id,
            }) => (
              <TableRow key={user_id}>
                <TableCell className="font-medium">{user_id}</TableCell>
                <TableCell>{email}</TableCell>
                {/* <TableCell>{image}</TableCell> */}
                <TableCell>{name}</TableCell>
                <TableCell className="text-right">
                  <Image
                    src={image ?? ''}
                    alt={name}
                    width={40}
                    height={40}
                    className="rounded-md"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Numero de usuarios</TableCell>
              <TableCell className="text-center">{data.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </ManagerLayout>

  );
}
