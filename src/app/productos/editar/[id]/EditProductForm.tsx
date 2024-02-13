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
import CheckBoxGroup from '@/components/form/CheckBoxGroup';

export default function EditProductForm() {
  const options = [
    {
      name: 'Tag 1',
      id: 1,
    },
    {
      name: 'Tag 2',
      id: 2,
    },
    {
      name: 'Tag 3',
      id: 3,
    },
    {
      name: 'Tag 4',
      id: 4,
    },
  ];
  return (
    <div className="grid gap-4 py-4 px-1">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="product_name" className="text-right">
          Nombre
        </Label>
        <Input
          id="product_name"
          name="product_name"
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
          name="product_price"
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
          name="product_description"
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
          name="product_stock"
          defaultValue={10}
          className="col-span-3"
          type="number"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="product_category" className="text-right">
          Categoria
        </Label>
        <Select name="category_id">
          <SelectTrigger className="col-span-3">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Categoria 1</SelectItem>
            <SelectItem value="2">Categoria 2</SelectItem>
            <SelectItem value="3">Categoria 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="product_brand" className="text-right">
          Marca
        </Label>
        <Select name="brand_id">
          <SelectTrigger className="col-span-3">
            <SelectValue placeholder="Marca" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Marca 1</SelectItem>
            <SelectItem value="2">Marca 2</SelectItem>
            <SelectItem value="3">Marca 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="product_tags" className="text-right">
          Tags
        </Label>
        <CheckBoxGroup groupName="tag_id" options={options} />
      </div>
    </div>
  );
}
