import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function CategoryForm(
  { category_name = '', category_description = '' }
  :
  { category_name?: string, category_description?: string },
) {
  return (
    <div className="grid gap-4 py-4 px-1">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="category_name" className="text-right">
          Nombre
        </Label>
        <Input
          id="category_name"
          name="category_name"
          defaultValue={category_name}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="category_description" className="text-right">
          Descripción
        </Label>
        <Textarea
          id="category_description"
          name="category_description"
          defaultValue={category_description}
          className="col-span-3"
        />
      </div>
    </div>
  );
}
