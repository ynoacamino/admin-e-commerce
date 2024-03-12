'use client';

import H1 from '@/components/ui/H1';
import Link from '@/components/ui/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function ManagerLayout({
  children, title, newButtonName, newButtonHref,
}: {
  children: React.ReactNode, title: string, newButtonName?: string, newButtonHref?: string
}) {
  const router = useRouter();
  return (
    <main className="p-6">
      <H1>
        {title}
      </H1>
      {
        newButtonHref && newButtonName && (
        <div className="pb-4 flex gap-4">
          <Link variants="default" href={newButtonHref}>
            <span className="mr-2">+</span>
            {newButtonName}
          </Link>
          <Button onClick={() => router.refresh()}>
            🔄️ Reload
          </Button>
        </div>
        )
      }
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </main>
  );
}
