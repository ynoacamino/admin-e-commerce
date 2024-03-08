import { cn } from '@/lib/utils';

export function Check({ className = '' }: { className?: string }) {
  return (
    <div className={
      cn('w-9 h-9 rounded-lg text-primary p-1', className)
    }
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-full h-auto aspect-square">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
      </svg>
    </div>
  );
}
