import H1 from '@/components/ui/H1';
import Link from '@/components/ui/link';

export default function ManagerLayout({
  children, title, newButtonName, newButtonHref,
}: {
  children: React.ReactNode, title: string, newButtonName: string, newButtonHref: string
}) {
  return (
    <main className="p-6">
      <H1>
        {title}
      </H1>
      <div className="pb-4">
        <Link variants="default" href={newButtonHref}>
          <span className="text-xl mr-2">+</span>
          {newButtonName}
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </main>
  );
}
