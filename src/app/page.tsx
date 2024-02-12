import H1 from '@/components/ui/H1';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { menuOptions } from '@/components/initialPage/menuOptions';
import { randomUUID } from 'crypto';

export default function Home() {
  return (
    <div className="w-full p-6 flex flex-col gap-6">
      {menuOptions.map(({ title, options }) => (
        <div key={randomUUID()}>
          <H1>
            {title}
          </H1>
          <div className="grid grid-cols-2 gap-4">
            {
              options.map(({ href, name, Icon }) => (
                <Link href={href} key={randomUUID()}>
                  <Card className="flex flex-row justify-between hover:bg-accent transition-colors">
                    <CardHeader className="flex-1">
                      <CardTitle>{name}</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center">
                      {Icon && <Icon className="w-10 h-10" />}
                    </CardContent>
                  </Card>
                </Link>
              ))
            }
          </div>
        </div>
      ))}
    </div>
  );
}
