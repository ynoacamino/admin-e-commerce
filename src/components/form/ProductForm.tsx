import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
// import Checkbox from '../ui/checkbox';
import { prisma } from '@/lib/prisma';
import ImageForm from './ImageForm';

const getProductInfo = async () => {
  const categories = await prisma.category.findMany();
  const brands = await prisma.brand.findMany();

  return {
    categories,
    brands,
  };
};

export default async function ProductForm(
  {
    product_name = '',
    product_price = 0,
    product_description = '',
    product_stock = 0,
    product_category = '',
    product_brand = '',
    product_image = '',
  } : {
    product_name?: string,
    product_price?: number,
    product_description?: string,
    product_stock?: number,
    product_category?: string,
    product_brand?: string,
    product_image?: string,
  },
) {
  const data = await getProductInfo();
  return (
    <div className="grid gap-4 py-4 px-1">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="product_name" className="text-right">
          Nombre
        </Label>
        <Input
          id="product_name"
          name="product_name"
          defaultValue={product_name}
          placeholder="Nombre del producto"
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
          placeholder="0.00"
          defaultValue={product_price}
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
          placeholder="Descripción del producto"
          defaultValue={product_description}
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
          defaultValue={product_stock}
          placeholder="0"
          className="col-span-3"
          type="number"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="product_category" className="text-right">
          Categoria
        </Label>
        <Select name="product_category" defaultValue={product_category}>
          <SelectTrigger className="col-span-3">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            {
              data.categories.map(({ category_name, category_id }) => (
                <SelectItem
                  key={category_id}
                  value={String(category_id)}
                >
                  {category_name}
                </SelectItem>
              ))
            }
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="product_brand" className="text-right">
          Marca
        </Label>
        <Select name="product_brand" defaultValue={product_brand}>
          <SelectTrigger className="col-span-3">
            <SelectValue placeholder="Marca" />
          </SelectTrigger>
          <SelectContent>
            {
              data.brands.map(({ brand_name, brand_id }) => (
                <SelectItem
                  key={brand_id}
                  value={String(brand_id)}
                >
                  {brand_name}
                </SelectItem>
              ))
            }
          </SelectContent>
        </Select>
      </div>
      {/* <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="product_tags" className="text-right">
          Tags
        </Label>
        <div
          className="col-span-3 flex gap-3 flex-wrap border-border border-[1px] rounded-lg p-3"
        >
          {
            options.map(({ id, name }) => (
              <Checkbox
                key={id}
                name={id}
                checked={false}
                label={name}
              />
            ))
          }
        </div>
      </div> */}
      <ImageForm defaultImageUrl={product_image} />
    </div>
  );
}
