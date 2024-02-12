import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

export default function EditProductForm() {
  return (
    <form>
      <div className="grid gap-4 py-4 px-1">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="product_name" className="text-right">
            Nombre
          </Label>
          <Input
            id="product_name"
            defaultValue="Nombre del producto"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="product_price" className="text-right">
            Precio
          </Label>
          <Input
            id="product_price"
            defaultValue={10}
            className="col-span-3"
            type="number"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="product_description" className="text-right">
            Descripción
          </Label>
          <Textarea
            id="product_description"
            defaultValue="Descripción del producto"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="product_stock" className="text-right">
            Stock
          </Label>
          <Input
            id="product_stock"
            defaultValue={10}
            className="col-span-3"
            type="number"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="product_category" className="text-right">
            Categoria
          </Label>
          <Select>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="product_brand" className="text-right">
            Marca
          </Label>
          <Select>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="product_tags" className="text-right">
            Tags
          </Label>
          <div className="col-span-3 flex gap-3 flex-wrap border-border border-[1px] rounded-lg p-3">
            <div className="flex items-center">
              <Checkbox id="tag1" name="tag1" />
              <Label htmlFor="tag1" className="ml-2">
                Tag 1
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="tag1" name="tag1" />
              <Label htmlFor="tag1" className="ml-2">
                Tag 1
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="tag1" name="tag1" />
              <Label htmlFor="tag1" className="ml-2">
                Tag 1
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="tag1" name="tag1" />
              <Label htmlFor="tag1" className="ml-2">
                Tag 1
              </Label>
            </div>
          </div>
        </div>

      </div>
    </form>
  );
}
