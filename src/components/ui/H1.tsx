import { cn } from '@/lib/utils';

export default function H1({
  children, className,
}: {
  children: React.ReactNode, className?: string
}) {
  return (
    <h1 className={cn('text-5xl font-bold mb-8', className)}>
      {children}
    </h1>
  );
}
