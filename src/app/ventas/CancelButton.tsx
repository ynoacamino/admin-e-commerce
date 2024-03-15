'use client';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function CancelButton({
  user_id, product_id,
}: { user_id: number, product_id: number }) {
  const { refresh } = useRouter();

  const handleClick = async () => {
    try {
      await fetch('/api/cart/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id,
          product_id,
        }),
      }).then((res) => res.json());

      toast.success('Venta cancelada');
      refresh();
    } catch (err) {
      console.error(err);
      toast.error('Error al cancelar la venta');
    }
  };

  return (
    <Button variant="destructive" onClick={handleClick}>
      Cancelar
    </Button>
  );
}
