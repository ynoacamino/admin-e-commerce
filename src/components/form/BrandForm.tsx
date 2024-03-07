import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function BrandForm({ brand_name = '' }: { brand_name?: string }) {
  return (
    <div className="grid gap-4 py-4 px-1">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="brand_name" className="text-right">
          Nombre
        </Label>
        <Input
          id="brand_name"
          name="brand_name"
          placeholder="Nombre de la marca"
          defaultValue={brand_name}
          className="col-span-3"
        />
      </div>
    </div>
  );
}
