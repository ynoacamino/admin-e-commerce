import NextLink from 'next/link';
import { cn } from '@/lib/utils';

type LinkProps = {
  children: React.ReactNode,
  className?: string,
  href: string,
  props?: any,
  size?: 'default' | 'sm' | 'lg' | 'icon',
  isSelect?: boolean,
  variants?: 'edit' | 'default' | 'success' | 'warning' | 'ghost' | 'link',
};

export default function Link({
  children, className = '', href, size = 'default', isSelect = false, variants = 'default', ...props
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        {
          'h-10 px-4 py-2': size === 'default',
          'h-9 rounded-md px-3': size === 'sm',
          'h-11 rounded-md px-8': size === 'lg',
          'h-10 w-10': size === 'icon',
        },
        {
          'bg-accent text-accent-foreground hover:cursor-default': isSelect,
        },
        {
          'bg-primary text-primary-foreground hover:bg-primary/90': variants === 'default',
          'bg-destructive text-destructive-foreground hover:bg-destructive/90': variants === 'warning',
          'bg-green-600 dark:bg-green-800 text-destructive-foreground hover:bg-green-500': variants === 'success',
          'hover:bg-accent hover:text-accent-foreground': variants === 'ghost',
          'text-primary underline-offset-4 hover:underline': variants === 'link',
        },
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}
