import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function CategoryForm() {
  return (
    <div className="grid gap-4 py-4 px-1">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="product_name" className="text-right">
          Nombre
        </Label>
        <Input
          id="product_name"
          name="product_name"
          defaultValue="Nombre de la categoria"
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="product_description" className="text-right">
          Descripción
        </Label>
        <Textarea
          id="product_description"
          name="product_description"
          defaultValue="Descripción de la categoria"
          className="col-span-3"
        />
      </div>
    </div>
  );
}
